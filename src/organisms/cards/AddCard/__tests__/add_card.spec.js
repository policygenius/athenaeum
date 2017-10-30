import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import AddCard from 'organisms/cards/AddCard';

describe('<AddCard />', () => {
  let props;

  beforeEach(() => {
    props = {
      cardText: 'Test',
    };
  });

  it('renders', () => {
    const wrapper = mount(<AddCard {...props} />);

    expect(wrapper.type()).to.equal(AddCard);
  });

  it('adds .disabled class if props.disabled is true', () => {
    const wrapper = shallow(<AddCard disabled {...props} />);

    expect(wrapper.hasClass('disabled')).to.be.true;
  });
});
