import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import PolicyCard from 'organisms/cards/PolicyCard';

describe('<PolicyCard />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      footer: [],
      carrierLogo: <div></div>,
      policyType: 'Type',
      policyTooltip: 'Tooltip',
      financialStrength: 'A+',
      customerService: 'A+',
      totalCustomers: 5200000,
      premium: {
        price: 19.8,
        format: 'mo'
      },
      onContinue: () => {},
      onDetails: () => {},
      onCompare: () => {},
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(<PolicyCard {...defaultProps} />);

    expect(wrapper.type()).toEqual(PolicyCard);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<PolicyCard {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
