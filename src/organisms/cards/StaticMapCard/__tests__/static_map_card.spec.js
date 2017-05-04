import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import StaticMapCard from 'organisms/cards/StaticMapCard';

describe('<StaticMapCard />', () => {

  it('renders', () => {
    const wrapper = shallow(<StaticMapCard apiKey='samplekey' />);

    expect(wrapper.length).to.equal(1);
  });
});
