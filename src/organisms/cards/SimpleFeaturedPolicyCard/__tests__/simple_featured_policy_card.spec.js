import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SimpleFeaturedPolicyCard from 'organisms/cards/SimpleFeaturedPolicyCard';

describe('<SimpleFeaturedPolicyCard />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      carrierLogo: <div />,
      premium: {
        price: 19.8,
        format: 'mo'
      },
      onDetails: jest.fn(),
      compareCheckbox: {
        onCompare: jest.fn(),
        compareSelected: false,
        name: 'a_unique_name',
      }
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(<SimpleFeaturedPolicyCard {...defaultProps} />);

    expect(wrapper.type()).toEqual(SimpleFeaturedPolicyCard);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<SimpleFeaturedPolicyCard {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
