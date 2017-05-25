import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Icon from 'atoms/Icon';
import GenericCard from 'organisms/cards/GenericCard';

describe('<GenericCard />', () => {

  it('renders', () => {
    const wrapper = mount(<GenericCard />);

    expect(wrapper.type()).to.equal(GenericCard);
  });

  it('renders (x) icon when onClose prop is defined', () => {
    const wrapper = shallow(<GenericCard onClose={() => null} />);

    expect(wrapper.find('.icon-close')).to.have.length(1);
    expect(wrapper.containsAnyMatchingElements([ <Icon /> ])).to.be.true;
  });

  it('renders footer when footerText prop is defined', () => {
    const footerText = 'hello world';
    const wrapper = shallow(<GenericCard footerText={footerText} />);

    expect(wrapper.find('.footer')).to.have.length(1);
    expect(wrapper.find('.footer').first().text()).to.equal(footerText);
  });

});
