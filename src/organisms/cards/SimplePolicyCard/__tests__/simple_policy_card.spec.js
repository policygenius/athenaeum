import React from 'react';
import renderer from 'react-test-renderer';

import SimplePolicyCard from 'organisms/cards/SimplePolicyCard';

describe('<SimplePolicyCard />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      carrierLogo: <div></div>,
      premium: {
        price: 19.8,
        format: 'mo'
      },
      onDetails: jest.fn(),
      compareCheckbox: {
        onCompare: jest.fn()
      }
    };
  });

  it('renders correctly', () => {
    const actual = renderer.create(<SimplePolicyCard {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
