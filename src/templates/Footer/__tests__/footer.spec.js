import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from 'templates/Footer';


describe('<Footer />', () => {

  it('renders', () => {
    const wrapper = shallow(<Footer phoneNumber='1 (800) 888-8888' onClickChat={() => {}} />);

    expect(wrapper.length).to.equal(1);
  });
});
