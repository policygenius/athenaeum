import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Img from 'atoms/Img';

describe('<Img />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Img />);

    expect(wrapper.type()).toEqual(Img);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Img />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
