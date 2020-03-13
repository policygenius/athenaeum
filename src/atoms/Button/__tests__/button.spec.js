import React from 'react';
import { shallow } from 'enzyme';
import assign from 'lodash/assign';

import Icon from 'atoms/Icon';
import Button from '../index';

describe('Button', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      onClick: jest.fn(),
      shake: false,
      type: 'button',
      disabled: false
    };
  });

  it('is a <button> tag', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.type()).toEqual('button');
  });

  it('adds the variant prop as a className', () => {
    const props = assign({}, defaultProps, { variant: 'info' });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.hasClass(props.variant)).toBe(true);
  });

  it('adds a custom className to button if given in props', () => {
    const props = assign({}, defaultProps, { className: 'customClass' });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.hasClass(props.className)).toBe(true);
  });

  it('passes button attributes to button if given in props', () => {
    const props = assign({}, defaultProps, { disabled: false, type: 'reset' });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.prop('disabled')).toEqual(props.disabled);
    expect(wrapper.prop('type')).toEqual(props.type);
  });

  it('renders the children correctly', () => {
    const wrapper = shallow(
      <Button {...defaultProps} icon='lock'>
        hello world!
      </Button>
    );

    expect(wrapper.contains('hello world!')).toBe(true);
    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find(Icon).prop('icon')).toEqual('lock');
  });

  it('triggers props.onClick when clicked', () => {
    const wrapper = shallow(<Button {...defaultProps} />);

    wrapper.find('button').simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
