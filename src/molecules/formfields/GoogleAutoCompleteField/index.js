/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import reduce from 'lodash/reduce';
import keys from 'lodash/keys';
import assign from 'lodash/assign';
import TextField from 'molecules/formfields/TextField';

import loadJS from './util/loadJS';
import {
  GOOGLE_ADDRESS_VALUES_MAP,
} from './constants';

class GoogleAutoCompleteField extends Component {
  state = {
    autocomplete: null,
  }

  componentDidMount() {
    const {
      googlePlacesLink,
      googlePlacesAPIKey
    } = this.props;

    window.initMap = this.initMap;

    if (googlePlacesLink || googlePlacesAPIKey) {
      loadJS({
        link: googlePlacesLink,
        key: googlePlacesAPIKey,
      });
    }
  }

  initMap = () => {
    const { id } = this.props;

    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById(`${id}`),
      { types: [ 'geocode' ] }
    );

    this.setState({ autocomplete });

    autocomplete.addListener('place_changed', () => {
      this.updateAddress();
    });
  }

  updateAddress = () => {
    const place = this.state.autocomplete.getPlace();
    const addressData = this.formatAddressInfo(place.address_components);

    if (!addressData.number) {
      const { value } = this.props.input;
      const streetNumberMatch = value && value.match(/^(\d+)/);

      if (streetNumberMatch && streetNumberMatch[0]) {
        const number = parseInt(streetNumberMatch[0], 10);

        addressData.number = { shortName: number, longName: number };
      }
    }

    const data = this.pickData(addressData);

    this.props.autocompleteAddressFields(data);
  }

  pickData = (addressData) => {
    const { addressValuesToPick } = this.props;
    const pickedData = pick(addressData, keys(addressValuesToPick));

    // Grab the short or long name from the addressData based on props.addressValuesToPick
    return reduce(pickedData, (res, names, addressValue) => assign({}, res, {
      [addressValue]: names[addressValuesToPick[addressValue]]
    }), {});
  }

  formatAddressInfo(addressInfo) {
    // Return an object where the laymen term value references both short_name and long_name
    // Ex:
    // info = {
    //   short_name: 'Broadway',
    //   long_name: 'Broadway,
    //   types: ['route'],
    // }
    //
    // becomes
    //
    // street: {
    //  shortName: 'Broadway',
    //  longName: 'Broadway,
    // }

    return addressInfo.reduce((res, info) => {
      const addressType = info.types[0];
      const formattedAddressValue = GOOGLE_ADDRESS_VALUES_MAP[addressType];

      if (formattedAddressValue) {
        return assign({}, res, {
          [formattedAddressValue]: {
            shortName: info.short_name,
            longName: info.long_name,
          }
        });
      }

      return res;
    }, {});
  }

  render() {
    const { id } = this.props;

    return (
      <TextField
        {...this.props}
        id={id}
      />
    );
  }
}

GoogleAutoCompleteField.propTypes = {
  /**
   * Values to be passed down to the TextField rendered by this component.
   * If using `redux-form`, this prop will come from the `Field` wrapper component.
   * `name` is required in order to build the Google autocomplete data properly.
   */
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,

  /**
   * Function that will be fired when a user selects an address from the autocomplete drop down.
   * It will be passed a `data` object containing the values picked from the Google autocomplete response
   */
  autocompleteAddressFields: PropTypes.func.isRequired,

  /**
   * `id` prop onto which Google will hook the autocomplete functionality
   */
  id: PropTypes.string.isRequired,

  /**
   * A map of values to pick from the Google autocomplete response.
   * Available values to pick are:
   *
   * ```
   *  number
   *  street
   *  city
   *  neighborhood
   *  state
   *  county
   *  country
   *  zip
   * ```
   *
   * Available formatted values are: `shortName` and `longName`.
   *
   * You can construct this map as follows to receive the short name for number and long name for city:
   *
   * ```
   * {
      number: 'shortName',
      city: 'longName',
   * }
   * ```
   */
  addressValuesToPick: PropTypes.object,

  /**
   * Google Places authorized API link.
   * Providing this link will automatically load the necessary JS to enable the autocomplete functionality.
   * It is recommended that you as the consumer handle loading the Google JS to prevent multiple loads if you use this component more than once.
   */
  googlePlacesLink: PropTypes.string,

  /**
   * Google Places authorized API Key.
   * Providing this key will automatically load the necessary JS to enable the autocomplete functionality.
   * It is recommended that you as the consumer handle loading the Google JS to prevent multiple loads if you use this component more than once.
   */
  googlePlacesAPIKey: PropTypes.string,
};

GoogleAutoCompleteField.defaultProps = {
  id: 'autocomplete',
  addressValuesToPick: {
    number: 'shortName',
    street: 'longName',
    city: 'longName',
    state: 'longName',
    zip: 'shortName',
  },
};

export default GoogleAutoCompleteField;
