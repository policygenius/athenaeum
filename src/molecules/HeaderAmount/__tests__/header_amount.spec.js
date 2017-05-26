import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import HeaderAmount from 'molecules/HeaderAmount';

describe('<HeaderAmount />', () => {


  it('renders', () => {
    const wrapper = mount(<HeaderAmount />);

    expect(wrapper.type()).to.equal(HeaderAmount);
  });
});
