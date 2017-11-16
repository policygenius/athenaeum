import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';

describe('<Layout />', () => {

  it('creates a Layout component', () => {
    const wrapper = mount(<Layout />);

    expect(wrapper.type()).toEqual(Layout);
  });

  it('renders correctly', () => {
    const component = renderer.create(<Layout />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('can create variant via props', () => {
    const wrapper = shallow(<Layout variant='bordered-buckets' />);

    expect(wrapper.hasClass('bordered-buckets')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders its children', () => {
    const wrapper = shallow(
      <Layout smallCols={[ 1 ]}>
        <div className='child' />
        <div className='some-child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('.child')).toHaveLength(2);
    expect(wrapper.find('.some-child')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('wraps its children in `<Col>`', () => {
    const wrapper = shallow(
      <Layout smallCols={[ 1 ]}>
        <div className='child' />
        <div className='child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('Col')).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('doesn\'t wrap Cols in `<Col>`', () => {
    const wrapper = shallow(
      <Layout smallCols={[ 1 ]}>
        <div className='child' />
        <Col className='child' />
      </Layout>
    );

    expect(wrapper.find('Col > Col')).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('passes its `col` props down to its `<Col>` correctly', () => {
    const wrapper = shallow(
      <Layout
        smallCols={[ 1 ]}
        mediumCols={[ 6 ]}
        largeCols={[ 7, 5 ]}
        bottomSpacing='xLarge'
        fullwidth
        padding
      >
        <div className='child' />
        <div className='child' />
      </Layout>
    );

    expect(wrapper.find('Col').first().props().smallCols).toBeTruthy();
    expect(wrapper.find('Col').first().props().smallCols).toEqual(1);

    expect(wrapper.find('Col').first().props().mediumCols).toBeTruthy();
    expect(wrapper.find('Col').first().props().mediumCols).toEqual(6);

    expect(wrapper.find('Col').first().props().fullwidth).toBeTruthy();
    expect(wrapper.find('Col').first().props().padding).not.toBeTruthy();
    expect(wrapper.find('Col').first().props().bottomSpacing).toEqual('xLarge');
    expect(wrapper).toMatchSnapshot();
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

    expect(wrapper.find('Col').get(0).props.largeCols).toEqual(7);
    expect(wrapper.find('Col').get(1).props.largeCols).toEqual(5);
    expect(wrapper).toMatchSnapshot();
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

    expect(wrapper.children().get(0).props.smallCols).toEqual(1);
    expect(wrapper.children().get(1).props.smallCols).toEqual(3);
    expect(wrapper.children().get(2).props.smallCols).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

});
