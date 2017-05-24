import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Animate from 'atoms/Animate';

describe('<Animate />', () => {
  it('renders', () => {
    const wrapper = mount(<Animate />);

    expect(wrapper.type()).to.equal(Animate);
  });

  it('correctly renders a new wrapper for each animation', () => {
    const wrapper = shallow(
      <Animate animations='fadeIn shake'>
        Child Node
      </Animate>
    );

    expect(wrapper.hasClass('animation-wrapper')).to.equal(true);
    expect(wrapper.children().first().hasClass('shake animate')).to.equal(true);
    expect(wrapper.childAt(0).childAt(0).hasClass('fadeIn animate')).to.equal(true);
  });
});
