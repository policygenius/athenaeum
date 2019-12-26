import React from 'react';
import renderer from 'react-test-renderer';

import CircularLoader from 'atoms/CircularLoader';

describe('<CircularLoader />', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<CircularLoader />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
