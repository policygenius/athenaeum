import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Hide from 'wrappers/Hide';

describe('<Hide />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Hide hideOn='mobile'>hello</Hide>);

    expect(wrapper.type()).toEqual(Hide);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Hide hideOn='mobile'>hello</Hide>).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
