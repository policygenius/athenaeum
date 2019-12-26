import React from 'react';
import renderer from 'react-test-renderer';

import Br from 'atoms/Br';

describe('<Br />', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<Br />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
