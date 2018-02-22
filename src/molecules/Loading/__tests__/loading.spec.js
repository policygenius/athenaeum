import React from 'react';
import renderer from 'react-test-renderer';

import Loading from 'molecules/Loading';

describe('<Loading />', () => {
  it('matches snapshot', () => {
    const actual = renderer.create(
      <Loading icon='xIcon' messages={[]} />
    ).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
