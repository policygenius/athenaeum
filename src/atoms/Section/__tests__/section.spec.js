import React from 'react';
// import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Section from 'atoms/Section';

describe('<Section />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<Section />);

    expect(wrapper.type()).toEqual(Section);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Section />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
