import React from 'react';
//import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Wrapper from 'atoms/Wrapper';

describe('<Wrapper />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<Wrapper />);

    expect(wrapper.type()).toEqual(Wrapper);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Wrapper />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
