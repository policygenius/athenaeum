import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from 'molecules/StarRating';

describe('<StarRating />', () => {
  beforeEach(() => {
    global.fetch = () => new Promise((resolve) => resolve());
  });

  it('renders correctly', () => {
    const actual = renderer.create(<StarRating rating={4} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
