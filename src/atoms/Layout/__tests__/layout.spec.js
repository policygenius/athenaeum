import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';

describe('<Layout />', () => {

  it('renders', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.length).to.equal(1);
  });


  it('renders its children', () => {
    const wrapper = shallow(
      <Layout smallCols={[ 1 ]}>
        <div className='child' />
        <div className='some-child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('.child')).to.have.length(2);
    expect(wrapper.find('.some-child')).to.have.length(1);

  });

  it('wraps its children in `<Col>`', () => {
    const wrapper = shallow(
      <Layout smallCols={[ 1 ]}>
        <div className='child' />
        <div className='child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('Col')).to.have.length(3);
  });

  it('passes its `col` props down to its `<Col>`', () => {
    const wrapper = shallow(
      <Layout
        smallCols={[ 1 ]}
        mediumCols={[ 6 ]}
        largeCols={[ 7, 5 ]}
      >
        <div className='child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('Col').first().props().smallCols).to.be.ok;
    expect(wrapper.find('Col').first().props().smallCols).to.equal(1);

    expect(wrapper.find('Col').first().props().mediumCols).to.be.ok;
    expect(wrapper.find('Col').first().props().mediumCols).to.equal(6);
  });

  it('wraps its child `<Col>` with column sizes', () => {
    const wrapper = shallow(
      <Layout
        largeCols={[ 7, 5 ]}
      >
        <div className='child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('Col').get(0).props.largeCols).to.equal(7);
    expect(wrapper.find('Col').get(1).props.largeCols).to.equal(5);
  });

  it('wraps its child `<Col>` with column sizes', () => {
    const wrapper = shallow(
      <Layout
        smallCols={[ 1 ]}
      >
        <div className='child' />

        <Col smallCols={3}>
          <div className='one-off' />
        </Col>

        <div className='child' />

      </Layout>
    );

    expect(wrapper.children().get(0).props.smallCols).to.equal(1);
    expect(wrapper.children().get(1).props.smallCols).to.equal(3);
    expect(wrapper.children().get(2).props.smallCols).to.equal(1);
  });

});
