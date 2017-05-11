import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from 'templates/Footer';

/* eslint-disable */
jest.mock('atoms/Icon', () => {
  const React = require('react');

  class Icon extends React.Component {
    render() {
      return <div />;
    }
  }

  return Icon;
});
/* eslint-enable */

describe('<Footer />', () => {

  it('renders', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.length).to.equal(1);
  });
});
