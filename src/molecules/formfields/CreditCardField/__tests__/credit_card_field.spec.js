import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CreditCardField from 'molecules/formfields/CreditCardField';

describe('<CreditCardField />', () => {

  xit('renders', () => {
    const wrapper = shallow(<CreditCardField />);

    expect(wrapper.length).to.equal(1);
  });
});
