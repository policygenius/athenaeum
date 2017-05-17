import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from 'templates/Footer';


describe('<Footer />', () => {

  it('renders', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.length).to.equal(1);
  });
});
