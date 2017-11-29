import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import StepIndicator from 'molecules/StepIndicator';

describe('<StepIndicator />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<StepIndicator steps={[]} navigateToPath={() => {}} />);

    expect(wrapper.type()).toEqual(StepIndicator);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<StepIndicator steps={[]} navigateToPath={() => {}} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
