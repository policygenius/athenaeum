import React from 'react';
// import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hero from 'organisms/Hero';

describe('<Hero />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<Hero />);

    expect(wrapper.type()).toEqual(Hero);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Hero />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
