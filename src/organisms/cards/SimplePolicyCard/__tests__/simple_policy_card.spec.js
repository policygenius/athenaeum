import React from 'react';
import { mount } from 'enzyme';
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
      onDetails: () => {},
      compareCheckbox: {
        onCompare: () => {},
      },
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(<SimplePolicyCard {...defaultProps} />);

    expect(wrapper.type()).toEqual(SimplePolicyCard);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<SimplePolicyCard {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
