import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import TextComponent from 'atoms/TextComponent';
import Text from 'atoms/Text';

describe('<TextComponent />', () => {

  it('renders', () => {
    const wrapper = shallow(<TextComponent />);

    expect(wrapper.type()).to.equal(Text);
  });

  it('renders text', () => {
    const wrapper = render(<TextComponent>yolo</TextComponent>);

    expect(wrapper.text()).to.be.equal('yolo');
  });

  it('mounts nothing if it has no children.', () => {
    const wrapper = render(<TextComponent />);

    expect(wrapper.html()).to.equal('');
  });
});
