import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import StackedCard from '../index';

describe('StackedCard', () => {

  it('is a <StackedCard>', () => {
    const wrapper = shallow(<StackedCard />);

    expect(wrapper.length).to.equal(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <StackedCard>
        <div className='wildthing' />
      </StackedCard>
    );

    expect(wrapper.contains(<div className='wildthing' />)).to.equal(true);
  });

  it('wraps children it are wrapped in an li.stacked-li', () => {
    const wrapper = shallow(
      <StackedCard>
        <div className='wildthing' />
        <div className='wildthing' />
        <div className='wildthing' />
      </StackedCard>
    );

    expect(wrapper.find('li')).to.have.length(3);
    expect(wrapper.find('.stacked-li')).to.have.length(3);
  });
});
