import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Text from 'atoms/Text';

describe('<Text />', () => {

  it('renders', () => {
    const wrapper = shallow(<Text />);

    expect(wrapper.length).to.equal(1);
  });

  it('renders text', () => {
    const wrapper = shallow(<Text>yolo</Text>);

    expect(wrapper.text()).to.be.equal('yolo');
  });

  it('mounts nothing if it has no children.', () => {
    const wrapper = mount(<Text />);

    expect(wrapper.html()).to.be.a('null');
  });
});
