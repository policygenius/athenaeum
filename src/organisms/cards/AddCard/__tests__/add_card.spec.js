import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import AddCard from 'organisms/cards/AddCard';

describe('<AddCard />', () => {

  it('renders', () => {
    const wrapper = mount(<AddCard />);

    expect(wrapper.type()).to.equal(AddCard);
  });

  it('adds .disabled class if props.disabled is true', () => {
    const wrapper = shallow(<AddCard disabled />);

    expect(wrapper.hasClass('disabled')).to.be.true;
  });
});
