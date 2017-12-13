import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import StarRating from 'molecules/StarRating';

describe('<StarRating />', () => {

  it('renders correctly', () => {
    const wrapper = mount(<StarRating />);

    expect(wrapper.type()).toEqual(StarRating);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<StarRating />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
