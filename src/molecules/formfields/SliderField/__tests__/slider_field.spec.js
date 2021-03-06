import React from 'react';
import renderer from 'react-test-renderer';

import SliderField from 'molecules/formfields/SliderField';

describe('<SliderField />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      sliderValues: [ 1, 2, 3, 4, 5 ],
      input: {
        value: 2,
        onChange: jest.fn(),
      }
    };
  });

  it('renders correctly', () => {
    const actual = renderer.create(<SliderField {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
