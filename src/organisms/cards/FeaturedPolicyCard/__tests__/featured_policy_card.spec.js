import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import FeaturedPolicyCard from 'organisms/cards/FeaturedPolicyCard';

describe('<FeaturedPolicyCard />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      header: [],
      carrierLogo: <div />,
      information: [
        {
          label: 'Financial Strength',
          value: 'A+',
          hoverMessage: <div />
        },
        {
          label: 'Total Customers',
          value: 16000000,
          hoverMessage: <div />
        },
        {
          label: 'Policy Type',
          value: 'Level Term',
          hoverMessage: <div />
        },
      ],
      premium: {
        price: 19.8,
        format: 'mo'
      },
      onContinue: jest.fn(),
      onDetails: jest.fn(),
      discount: <div />
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(<FeaturedPolicyCard {...defaultProps} />);

    expect(wrapper.type()).toEqual(FeaturedPolicyCard);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<FeaturedPolicyCard {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
