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
      policyType: {
        value: 'A+',
        tooltipMessage: <div />
      },
      financialStrength: {
        value: 'A+',
        tooltipMessage: <div />
      },
      totalCustomers: {
        value: 16,
        tooltipMessage: <div />
      },
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
