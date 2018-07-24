import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import StepIndicator from '../';
import ProgressBarStep from '../ProgressBarStep';

describe('<StepIndicator />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<StepIndicator steps={[]} navigateToPath={() => {}} />);

    expect(wrapper.type()).toEqual(StepIndicator);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<StepIndicator steps={[]} navigateToPath={() => {}} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  describe('<ProgressBarStep />', () => {
    const step = {
      currentStepActive: false,
      clickable: true
    };

    it('has an onClick handler when staticBar prop is false and navigateToPath is defined', () => {
      const wrapper = mount(<ProgressBarStep step={step} navigateToPath={() => {}} />).find('.breadcrumb');

      expect(wrapper.props().onClick).toBeDefined();
    });

    it('does not have an onClick handler when staticBar prop is true', () => {
      const wrapper = mount(<ProgressBarStep step={step} navigateToPath={() => {}} staticBar />).find('.breadcrumb');

      expect(wrapper.props().onClick).not.toBeDefined();
    });
  });
});
