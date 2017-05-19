import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import assign from 'lodash/assign';
import { expect } from 'chai';

import Icon from 'atoms/Icon';
import Button from '../index';

describe('Button', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      variant: 'button',
      onClick: sinon.spy(),
      className: 'button',
      shake: false,
      type: 'button',
      disabled: false
    };
  });

  it('is a <button> tag', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.type()).to.equal('button');
  });

  it('adds the variant prop as a className', () => {
    const props = assign({}, defaultProps, { variant: 'info' });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.hasClass(props.variant)).to.be.true;
  });

  it('adds the shaking className if props.shake is true', () => {
    const props = assign({}, defaultProps, { shake: false });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.hasClass('shaking')).to.be.false;

    wrapper.setProps({ shake: true });
    expect(wrapper.hasClass('shaking')).to.be.true;
  });

  it('adds a custom className to button if given in props', () => {
    const props = assign({}, defaultProps, { className: 'customClass' });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.hasClass(props.className)).to.be.true;
  });

  it('passes button attributes to button if given in props', () => {
    const props = assign({}, defaultProps, { disabled: false, type: 'reset' });
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.prop('disabled')).to.equal(props.disabled);
    expect(wrapper.prop('type')).to.equal(props.type);
  });

  it('renders the children correctly', () => {
    const wrapper = shallow(
      <Button {...defaultProps} icon='lock'>
        {'hello world!'}
      </Button>);

    expect(wrapper.contains('hello world!')).to.be.true;
    expect(wrapper.find(Icon)).to.have.length(1);
    expect(wrapper.find(Icon).prop('icon')).to.equal('lock');
  });

  it('triggers props.onClick when clicked', () => {
    const wrapper = shallow(<Button {...defaultProps} />);

    wrapper.find('button').simulate('click');
    expect(defaultProps.onClick.calledOnce).to.be.true;
  });
});
