import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CreditCardField from 'molecules/formfields/CreditCardField';

/* eslint-disable */
jest.mock('atoms/Icon', () => {
  const React = require('react');

  class Icon extends React.Component {
    render() {
      return <div />;
    }
  }

  return <div />;
});
/* eslint-enable */

describe('<CreditCardField />', () => {

  xit('renders', () => {
    const wrapper = shallow(<CreditCardField />);

    expect(wrapper.length).to.equal(1);
  });
});
