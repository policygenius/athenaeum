import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RadioCard from 'organisms/cards/RadioCard';

describe('<RadioCard />', () => {

  it('renders', () => {
    const wrapper = shallow(<RadioCard label='its a label' input={{}} radioValue='something' />);

    expect(wrapper.length).to.equal(1);
  });
});
