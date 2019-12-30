/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ShortDateField from 'molecules/formfields/ShortDateField';

describe('<ShortDateField />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      label: 'a label',
      input: {
        name: 'aDate',
        onChange: jest.fn(),
        value: '',
        onFocus: jest.fn(),
      },
      meta: {
        some: 'meta-value',
        error: null,
      },
      tooltip: 'some-tooltip',
      setScrollRef: jest.fn().mockReturnValue(jest.fn()),
      render: ({ monthField, yearField }) => (
        <React.Fragment>
          { monthField() }
          { yearField() }
        </React.Fragment>
      )
      ,
    };

  });

  it('renders correctly', () => {
    const actual = renderer.create(<ShortDateField {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  describe('onChange', () => {
    let onChangeSpy;

    beforeEach(() => {
      onChangeSpy = jest.fn();

      props = {
        ...props,
        input: {
          ...props.input,
          onChange: onChangeSpy
        }
      };

      component = mount(<ShortDateField {...props} />);
    });

    describe('when no fields are set', () => {
      it('does not call onChange', () => {
        component.find('[name="aDateMonth"]').simulate('change');

        expect(onChangeSpy.mock.calls).toEqual([
          [ null ]
        ]);
      });
    });

    describe('when one field is set', () => {
      it('does not call onChange', () => {
        component.find('[name="aDateMonth"]').simulate('change', {
          target: { value: 2 }
        });

        expect(onChangeSpy.mock.calls).toEqual([
          [ null ]
        ]);
      });
    });

    describe('when all two fields are set', () => {
      describe('and the fields do not make up a valid date', () => {
        it('does not call onChange', () => {
          component.find('[name="aDateMonth"]').simulate('change', {
            target: { value: 13 }
          });
          component.find('[name="aDateYear"]').simulate('change', {
            target: { value: 2016 }
          });

          expect(onChangeSpy.mock.calls).toEqual([
            [ null ],
            [ null ],
          ]);
        });
      });

      describe('and the fields make up a valid date', () => {
        it('calls onChange', () => {
          component.find('[name="aDateMonth"]').simulate('change', {
            target: { value: 5 }
          });
          component.find('[name="aDateYear"]').simulate('change', {
            target: { value: 2016 }
          });

          expect(onChangeSpy.mock.calls).toEqual([
            [ null ],
            [ '2016-05-01T00:00:00.000Z' ],
          ]);
        });
      });
    });
  });

  describe('setting date value from props', () => {
    describe('when there is no valid date', () => {
      beforeEach(() => {
        props = {
          ...props,
          input: {
            ...props.input,
            value: ''
          }
        };

        component = mount(<ShortDateField {...props} />);
      });

      it('sets the values underlying inputs', () => {
        const month = component.find('[name="aDateMonth"]');
        const year = component.find('[name="aDateYear"]');

        expect(month.props().value).toBe('');
        expect(year.props().value).toBe('');
      });
    });

    describe('when there is a valid date', () => {
      beforeEach(() => {
        props = {
          ...props,
          input: {
            ...props.input,
            value: '2016-07-01T00:00:00Z'
          }
        };

        component = mount(<ShortDateField {...props} />);
      });

      it('sets the month/year selects', () => {
        const DATE = new Date('2016-07-01T00:00:00Z');
        const month = component.find('[name="aDateMonth"]');
        const year = component.find('[name="aDateYear"]');

        expect(month.props().value).toEqual(DATE.getUTCMonth() + 1);
        expect(year.props().value).toEqual(DATE.getFullYear());
      });
    });
  });
});
