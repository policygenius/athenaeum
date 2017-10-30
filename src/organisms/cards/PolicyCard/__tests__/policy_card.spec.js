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
      information: {
        policyType: {
          label: 'label',
          value: 'Some policy',
          hoverMessage: <div></div>,
          tooltip: <div />
        },
        financialStrength: {
          label: 'label',
          value: 'A+',
          hoverMessage: <div></div>
        },
        customerService: {
          label: 'label',
          value: 'A+',
          hoverMessage: <div></div>
        },
        totalCustomers: {
          label: 'label',
          value: 16,
          hoverMessage: <div></div>
        },
      },
      mainInformationValue: 'policyType',
      mobileInformationValues: [ 'policyType', 'financialStrength' ],
      premium: {
        price: 19.8,
        format: 'mo'
      },
      onContinue: () => {},
      onDetails: () => {},
      compareCheckbox: {
        onCompare: () => {},
      },
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
