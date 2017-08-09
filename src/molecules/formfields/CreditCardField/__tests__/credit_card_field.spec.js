import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import CreditCardField from 'molecules/formfields/CreditCardField';

describe('<CreditCardField />', () => {

  it('renders', () => {
    const wrapper = mount(<CreditCardField input={{}} meta={{}} />);

    expect(wrapper.type()).to.equal(CreditCardField);
  });
});
