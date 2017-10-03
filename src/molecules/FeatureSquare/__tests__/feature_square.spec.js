import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import FeatureSquare from 'molecules/FeatureSquare';

describe('<FeatureSquare />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<FeatureSquare />);

    expect(wrapper.type()).toEqual(FeatureSquare);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<FeatureSquare />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
