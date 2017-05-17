import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import TextComponent from 'atoms/TextComponent';

describe('<TextComponent />', () => {
  it('renders', () => {
    const wrapper = shallow(<TextComponent />);

    expect(wrapper.length).to.equal(1);
  });

  it('renders text', () => {
    const wrapper = shallow(<TextComponent>yolo</TextComponent>);

    expect(wrapper.text()).to.be.equal('yolo');
  });

  it('mounts nothing if it has no children.', () => {
    const wrapper = mount(<TextComponent />);

    expect(wrapper.html()).to.be.a('null');
  });
});
