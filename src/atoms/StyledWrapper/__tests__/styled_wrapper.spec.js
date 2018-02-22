import React from 'react';
import renderer from 'react-test-renderer';

import StyledWrapper from 'atoms/StyledWrapper';

describe('<StyledWrapper />', () => {
  const styles = variables => `
    background: blue;
    color: white;
    height: 3em;
    width: 3em;
    text-align: center;

    @media ${variables.breakpoints.largeUp} {
        width: 100%;
    }
  `;

  it('renders correctly', () => {
    const actual = renderer.create(<StyledWrapper styles={styles} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
