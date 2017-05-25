import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AgentCallout from '../index';

describe('<AgentCallout />', () => {

  it('renders', () => {
    const wrapper = shallow(<AgentCallout imgSrc='' />);

    expect(wrapper.length).to.equal(1);
  });

});
