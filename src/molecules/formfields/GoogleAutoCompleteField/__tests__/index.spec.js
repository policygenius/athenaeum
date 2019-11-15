import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { omit } from 'lodash';
import TextField from 'molecules/formfields/TextField';

import GoogleAutoCompleteField from '../';

describe('<GoogleAutoCompleteField />', () => {
  let baseProps;
  let addressValues;

  beforeEach(() => {
    baseProps = {
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
    const wrapper = shallow(<GoogleAutoCompleteField {...baseProps} />);

    const actual = renderer.create(wrapper).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('returns a single TextField with appropriate props', () => {
    const wrapper = shallow(<GoogleAutoCompleteField {...baseProps} />);

    const field = wrapper.find(TextField);

    expect(field.length).toEqual(1);
    expect(field.props().name).toEqual(baseProps.name);
    expect(field.props().label).toEqual('Street address');
    expect(field.props().placeholder).toEqual('Enter your street address');
    expect(field.props().id).toEqual('autocomplete');
  });

  describe('updateAddress', () => {
    const expectedData = {
      number: '1',
      street: 'Broadway',
      city: 'New York',
      state: 'New York',
      zip: '10075',
    };

    it('calls autocomplete.getPlace and props.autocompleteAddressFields', () => {
      const state = {
        autocomplete: {
          getPlace: jest.fn(() => ({
            address_components: addressValues,
          }))
        }
      };

      const props = { ...baseProps };
      const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

      wrapper.setState(state);

      wrapper.instance().updateAddress();

      expect(state.autocomplete.getPlace.mock.calls.length).toBe(1);
      expect(props.autocompleteAddressFields.mock.calls.length).toBe(1);
      expect(props.autocompleteAddressFields.mock.calls[0][0]).toEqual(expectedData);
    });

    describe('when google does not provide street_number', () => {
      let addressValuesWithoutStreetNumber;
      let state;

      beforeEach(() => {
        addressValuesWithoutStreetNumber = addressValues
          .filter(value => !value.types.includes('street_number'));

        state = {
          autocomplete: {
            getPlace: jest.fn(() => ({
              address_components: addressValuesWithoutStreetNumber,
            }))
          }
        };
      });

      it('should extract the street_number manually', () => {
        const streetNumber = 1234;
        const id = 'autocomplete-id';
        const input = { name: 'address', value: `${streetNumber} Broadw` };
        const props = { ...baseProps, id, input };
        const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

        wrapper.setState(state);
        wrapper.instance().updateAddress();

        expect(state.autocomplete.getPlace.mock.calls.length).toBe(1);
        expect(props.autocompleteAddressFields.mock.calls.length).toBe(1);
        expect(props.autocompleteAddressFields.mock.calls[0][0])
          .toEqual({ ...expectedData, number: streetNumber });
      });

      it('should only extract the first digits as the street_number', () => {
        const streetNumber = 12;
        const props = {
          ...baseProps,
          id: 'autocomplete-id',
          input: { name: 'address', value: `${streetNumber} W 50th St` }
        };
        const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

        wrapper.setState(state);
        wrapper.instance().updateAddress();

        expect(state.autocomplete.getPlace.mock.calls.length).toBe(1);
        expect(props.autocompleteAddressFields.mock.calls.length).toBe(1);
        expect(props.autocompleteAddressFields.mock.calls[0][0])
          .toEqual({ ...expectedData, number: streetNumber });
      });

      it('should not return a street_number, if extraction fails', () => {
        const props = {
          ...baseProps,
          id: 'autocomplete-id',
          input: { name: 'address', value: 'Twelve Broadway' },
        };
        const wrapper = shallow(<GoogleAutoCompleteField {...props} />);

        wrapper.setState(state);
        wrapper.instance().updateAddress();

        expect(state.autocomplete.getPlace.mock.calls.length).toBe(1);
        expect(props.autocompleteAddressFields.mock.calls.length).toBe(1);
        expect(props.autocompleteAddressFields.mock.calls[0][0])
          .toEqual(omit(expectedData, 'number'));
      });
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

      const wrapper = shallow(<GoogleAutoCompleteField {...baseProps} />);

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

      const wrapper = shallow(<GoogleAutoCompleteField {...baseProps} />);

      const data = wrapper.instance().formatAddressInfo(addressValues);

      expect(wrapper.instance().pickData(data)).toEqual(expectedData);
    });
  });
});
