import React from 'react';
import renderer from 'react-test-renderer';

import FeatureSquare from 'molecules/FeatureSquare';

describe('<FeatureSquare />', () => {
  it('matches snapshot', () => {
    const props = {
      header: 'Header!',
      subheader: 'Subheader!!!',
      buttonText: 'CLICK SOMETHING ALREADY!',
      icon: 'xIcon'
    };

    const actual = renderer.create(<FeatureSquare {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
