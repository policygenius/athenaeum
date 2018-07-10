import React from 'react';
import { mount } from 'enzyme';
import DateField from 'molecules/formfields/DateField';

describe('<DateField />', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      label: 'a label',
      input: {
        name: 'aDate',
      },
      meta: {},
    };

    component = mount(<DateField {...props} />);
  });

  describe('error/focused states', () => {
    it('should have class date-field on wrapper', () => {
      props = {
        ...props,
        meta: {
          ...props.meta,
          active: true,
          visited: false,
          error: false
        }
      };

      component = mount(<DateField {...props} />);
      expect(component.find('.date-field')).toHaveLength(1);
    });

    describe('when the field is active', () => {
      beforeEach(() => {
        props = {
          ...props,
          meta: {
            ...props.meta,
            active: true,
            visited: false,
            error: false
          }
        };
      });

      it('should have class focused', () => {
        component = mount(<DateField {...props} />);
        expect(component.find('.date-field').hasClass('focused')).toBe(true);
      });
    });

    describe('when the field is not active', () => {
      beforeEach(() => {
        props = {
          ...props,
          meta: {
            ...props.meta,
            active: false
          }
        };
      });

      describe('and the field is visited without an error', () => {
        beforeEach(() => {
          props = {
            ...props,
            meta: {
              ...props.meta,
              visited: true,
              error: false
            }
          };
        });

        it('should have no extra classes', () => {
          component = mount(<DateField {...props} />);
          expect(component.find('.date-field').hasClass('focused')).toBe(false);
          expect(component.find('.date-field').hasClass('hasError')).toBe(false);
        });

        it('should not display and error message', () => {
          component = mount(<DateField {...props} />);
          expect(component.find('ErrorMessage').exists()).toBe(false);
        });
      });

      describe('and the field contains an error, but is not visited', () => {
        beforeEach(() => {
          props = {
            ...props,
            meta: {
              ...props.meta,
              visited: false,
              error: true
            }
          };
        });

        it('should have no extra classes', () => {
          component = mount(<DateField {...props} />);
          expect(component.find('.date-field').hasClass('focused')).toBe(false);
          expect(component.find('.date-field').hasClass('hasError')).toBe(false);
        });

        it('should not show an error message', () => {
          component = mount(<DateField {...props} />);
          expect(component.find('ErrorMessage')).toHaveLength(0);
        });
      });

      describe('and the field is visited and contains an error', () => {
        beforeEach(() => {
          props = {
            ...props,
            meta: {
              ...props.meta,
              visited: true,
              error: 'bad stuff happened'
            }
          };
        });

        it('should have a class error', () => {
          component = mount(<DateField {...props} />);

          expect(component.find('.date-field').hasClass('focused')).toBe(false);
          expect(component.find('.date-field').hasClass('hasError')).toBe(true);
        });

        it('should show an error message', () => {
          component = mount(<DateField {...props} />);
          expect(component.find('ErrorMessage')).toHaveLength(1);
          expect(component.text()).toContain('bad stuff happened');
        });
      });
    });
  });
});
