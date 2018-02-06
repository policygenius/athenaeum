import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TextField from 'molecules/formfields/TextField';

import GoogleAutoCompleteField from '../';

describe('<GoogleAutoCompleteField />', () => {
  let props;
  let addressValues;

  beforeEach(() => {
    props = {
      input: {
        name: 'streetAddress',
      },
      label: 'Street address',
      placeholder: 'Enter your street address',
      autocompleteAddressFields: jest.fn(),
    };

    addressValues = [
      {
        types: [
          'street_number'
        ],
        short_name: '1',
        long_name: '1',
      },
      {
        types: [
          'route'
        ],
        long_name: 'Broadway',
        short_name: 'Broadway',
      },
      {
        types: [
          'sublocality_level_1'
        ],
        long_name: 'New York',
        short_name: 'New York',
      },
      {
        types: [
          'administrative_area_level_1'
        ],
        short_name: 'NY',
        long_name: 'New York',
      },
      {
        types: [
          'postal_code'
        ],
        short_name: '10075',
        long_name: '10075',
      },
    ];
  });

  it('renders correctly', () => {
    const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

    const actual = renderer.create(wrapper).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('returns a single TextField with appropriate props', () => {
    const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

    const field = wrapper.find(TextField);

    expect(field.length).toEqual(1);
    expect(field.props().name).toEqual(props.name);
    expect(field.props().label).toEqual('Street address');
    expect(field.props().placeholder).toEqual('Enter your street address');
    expect(field.props().id).toEqual('autocomplete');
  });

  describe('updateAddress', () => {
    it('calls autocomplete.getPlace and props.autocompleteAddressFields', () => {
      const expectedData = {
        number: '1',
        street: 'Broadway',
        city: 'New York',
        state: 'New York',
        zip: '10075',
      };

      const state = {
        autocomplete: {
          getPlace: jest.fn(() => {
            return {
              address_components: addressValues,
            };
          })
        }
      };

      const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

      wrapper.setState(state);

      wrapper.instance().updateAddress();

      expect(state.autocomplete.getPlace.mock.calls.length).toBe(1);
      expect(props.autocompleteAddressFields.mock.calls.length).toBe(1);
      expect(props.autocompleteAddressFields.mock.calls[0][0]).toEqual(expectedData);
    });
  });

  describe('formatAddressInfo', () => {
    it('returns the correctly formatted data', () => {
      const expectedData = {
        number: {
          shortName: '1',
          longName: '1',
        },
        street: {
          shortName: 'Broadway',
          longName: 'Broadway',
        },
        city: {
          shortName: 'New York',
          longName: 'New York',
        },
        state: {
          shortName: 'NY',
          longName: 'New York',
        },
        zip: {
          shortName: '10075',
          longName: '10075',
        },
      };

      const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

      expect(wrapper.instance().formatAddressInfo(addressValues)).toEqual(expectedData);
    });
  });

  describe('pickData', () => {
    it('returns the correctly picked data', () => {
      const expectedData = {
        number: '1',
        street: 'Broadway',
        city: 'New York',
        state: 'New York',
        zip: '10075',
      };

      const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

      const data = wrapper.instance().formatAddressInfo(addressValues);

      expect(wrapper.instance().pickData(data)).toEqual(expectedData);
    });
  });
});
