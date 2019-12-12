import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Modal from 'molecules/Modal';

describe('<Modal />', () => {
  let wrapper;
  const callback = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Modal contentLabel='Test Modal' />);
  });

  it('renders', () => {
    expect(wrapper.length).to.equal(1);
  });

  it('passes props to ReactModal', () => {
    wrapper.setProps({
      onAfterOpen: callback,
      onRequestClose: callback,
      isOpen: false,
      variant: 'simple'
    });

    expect(wrapper.props().className).to.contain('simple');
    expect(wrapper.props().isOpen).to.equal(false);
  });

  it('calls props.onAfterOpen in this.onAfterOpen', () => {
    wrapper.setProps({
      onAfterOpen: callback,
      onRequestClose: callback,
      isOpen: false,
      variant: 'simple'
    });

    wrapper.instance().onAfterOpen();

    expect(callback.mock.calls).to.exist;
  });

  it('calls props.onRequestClose in this.onRequestClose', () => {
    wrapper.setProps({
      onAfterOpen: callback,
      onRequestClose: callback,
      isOpen: false,
      variant: 'simple'
    });

    wrapper.instance().onRequestClose();

    expect(callback.mock.calls).to.exist;
  });

  it('sets additional className prop', () => {
    wrapper.setProps({
      className: 'test'
    });

    expect(wrapper.props().className).to.contain('test');
  });

  it('calls onRequestClose callback when .close is clicked', () => {
    wrapper.setProps({
      onRequestClose: callback,
    });

    wrapper.find('.close').simulate('click');

    expect(callback.mock.calls).to.exist;
  });
});
