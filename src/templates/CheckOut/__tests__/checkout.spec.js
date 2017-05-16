import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import CheckOut from 'templates/CheckOut';

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

describe('<CheckOut />', () => {

  describe('Render', () => {
    let props;

    beforeEach(() => {
      props = {
        totalCost: { curr: '$', value: 100, unit: 'mo' }
      };
    });

    it('should render its partials', () => {
      const wrapper = render(<CheckOut {...props} />);

      expect(wrapper.find('.head-main').length).to.be.equal(1);
      expect(wrapper.find('.head-body').length).to.be.equal(1);
      expect(wrapper.find('.head-foot').length).to.be.equal(1);

      expect(wrapper.find('.main-content').length).to.be.equal(1);
    });

    it('should render totalCost', () => {
      const wrapper = render(<CheckOut {...props} />);

      expect(wrapper.find('.cost-price').text()).to.be.equal('$100/mo');
    });
  });

  describe('Exported Partials', () => {
    let props;

    beforeEach(() => {
      props = {
        totalCost: { curr: '$', value: 100, unit: 'mo' }
      };
    });

    it('should render `main` children when passed in', () => {
      const wrapper = shallow(
        <CheckOut {...props}>
          <div className='unique' />
        </CheckOut>
      );

      expect(wrapper.contains(<div className='unique' />)).to.be.true;
    });

    it('should render `sidebar` children when passed in', () => {
      const wrapper = shallow(
        <CheckOut {...props}>
          <CheckOut.Sidebar>
            <div className='unique' />
          </CheckOut.Sidebar>
        </CheckOut>
      );

      expect(wrapper.contains(<div className='unique' />)).to.be.true;
    });

  });

});
