/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import FullDateField from 'molecules/formfields/FullDateField';

describe('<FullDateField />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      label: 'a label',
      input: {
        name: 'aDate',
        onChange: () => {},
        value: '',
        onFocus: jest.fn(),
      },
      meta: {
        some: 'meta-value',
        error: null,
      },
      tooltip: 'some-tooltip',
      setScrollRef: jest.fn().mockReturnValue(jest.fn()),
      render: ({ dayField, monthField, yearField }) =>
        <React.Fragment>
          { monthField() }
          { dayField() }
          { yearField() }
        </React.Fragment>
      ,
    };
  });

  it('renders correctly', () => {
    const actual = renderer.create(<FullDateField {...props} />).toJSON();

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

      component = mount(<FullDateField {...props} />);
    });

    describe('when no fields are set', () => {
      it('does not call onChange', () => {
        component.find('[name="aDateDay"]').simulate('change');

        expect(onChangeSpy.mock.calls).toEqual([
          [ null ]
        ]);
      });
    });

    describe('when one field is set', () => {
      it('does not call onChange', () => {
        component.find('[name="aDateDay"]').simulate('change', {
          target: { value: 32 }
        });

        expect(onChangeSpy.mock.calls).toEqual([
          [ null ]
        ]);
      });
    });

    describe('when two fields are set', () => {
      it('does not call onChange', () => {
        component.find('[name="aDateDay"]').simulate('change', {
          target: { value: 32 }
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

    describe('when all three fields are set', () => {
      describe('and the fields do not make up a valid date', () => {
        it('does not call onChange', () => {
          component.find('[name="aDateMonth"]').simulate('change', {
            target: { value: 10 }
          });
          component.find('[name="aDateDay"]').simulate('change', {
            target: { value: 32 }
          });
          component.find('[name="aDateYear"]').simulate('change', {
            target: { value: 2016 }
          });

          expect(onChangeSpy.mock.calls).toEqual([
            [ null ],
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
          component.find('[name="aDateDay"]').simulate('change', {
            target: { value: 12 }
          });
          component.find('[name="aDateYear"]').simulate('change', {
            target: { value: 2016 }
          });

          expect(onChangeSpy.mock.calls).toEqual([
            [ null ],
            [ null ],
            [ '2016-05-12T00:00:00.000Z' ],
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

        component = mount(<FullDateField {...props} />);
      });

      it('sets the values underlying inputs', () => {
        const month = component.find('[name="aDateMonth"]');
        const day = component.find('[name="aDateDay"]');
        const year = component.find('[name="aDateYear"]');

        expect(month.props().value).toBe('');
        expect(day.props().value).toBe('');
        expect(year.props().value).toBe('');
      });
    });

    describe('when there is a valid date', () => {
      beforeEach(() => {
        props = {
          ...props,
          input: {
            ...props.input,
            value: '2016-07-11T00:00:00Z'
          }
        };

        component = mount(<FullDateField {...props} />);
      });

      it('sets the month/year selects', () => {
        const DATE = new Date('2016-07-11T00:00:00Z');
        const month = component.find('[name="aDateMonth"]');
        const day = component.find('[name="aDateDay"]');
        const year = component.find('[name="aDateYear"]');

        expect(month.props().value).toEqual(DATE.getMonth() + 1);
        expect(day.props().value).toEqual(DATE.getUTCDate());
        expect(year.props().value).toEqual(DATE.getFullYear());
      });
    });

    describe('when the valid date is the first of the month', () => {
      beforeEach(() => {
        props = {
          ...props,
          input: {
            ...props.input,
            value: '2018-01-01T00:00:00Z'
          }
        };

        component = mount(<FullDateField {...props} />);
      });

      it('sets the month/year selects', () => {
        const month = component.find('[name="aDateMonth"]');
        const day = component.find('[name="aDateDay"]');
        const year = component.find('[name="aDateYear"]');

        expect(month.props().value).toEqual(1);
        expect(day.props().value).toEqual(1);
        expect(year.props().value).toEqual(2018);
      });
    });
  });

  describe('isValidDayInput', () => {
    it('returns false if no dayValue provided', () => {
      expect(component.instance().isValidDayInput()).toEqual(false);
    });

    describe('date inRange', () => {
      let dayValue;

      beforeEach(() => {
        dayValue = '31';
      });

      it('returns false if dayValue is not in correct range for month', () => {
        component.instance().state = { monthValue: '02' };

        expect(component.instance().isValidDayInput(dayValue)).toEqual(false);
      });

      it('returns true if dayValue is in correct range for month', () => {
        component.instance().state = { monthValue: '05' };

        expect(component.instance().isValidDayInput(dayValue)).toEqual(true);
      });
    });
  });
});
