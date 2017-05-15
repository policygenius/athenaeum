import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RadioCardWrapper from 'organisms/cards/RadioCardWrapper';

describe('<RadioCardWrapper />', () => {

  it('renders', () => {
    const wrapper = shallow(<RadioCardWrapper />);

    expect(wrapper.length).to.equal(1);
  });
});
