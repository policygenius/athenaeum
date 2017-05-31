import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ComparisonRowItem from 'molecules/ComparisonRowItem';

describe('<ComparisonRowItem />', () => {

  it('renders', () => {
    const wrapper = mount(<ComparisonRowItem label='this is it' />);

    expect(wrapper.type()).to.equal(ComparisonRowItem);
  });
});
