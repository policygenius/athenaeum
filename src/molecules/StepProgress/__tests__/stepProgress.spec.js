import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import StepProgress from 'molecules/StepProgress';

describe('<StepProgress />', () => {

  it('renders', () => {
    const wrapper = shallow(<StepProgress />);

    expect(wrapper.length).to.equal(1);
  });

  it('renders a .step for each step', () => {
    const defaultProps = {
      steps: [
        {
          complete: true, icon: 'calculator', label: 'Aenean', link: '#'
        },
        {
          complete: true, icon: 'health', label: 'Phasellus', link: '#'
        },
      ],
    };

    const wrapper = shallow(<StepProgress {...defaultProps} />);

    expect(wrapper.find('.step').length).to.equal(defaultProps.steps.length);
  });

});
