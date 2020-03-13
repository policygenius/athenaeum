import React from 'react';
import renderer from 'react-test-renderer';

import Section from 'atoms/Section';

describe('<Section />', () => {
  it('renders correctly', () => {
    const actual = renderer.create(<Section />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
