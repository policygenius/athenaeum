import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ToggleField from 'molecules/formfields/ToggleField';

describe('<ToggleField />', () => {
  it('renders', () => {
    const wrapper = mount(<ToggleField input={{}} />);

    expect(wrapper.type()).to.equal(ToggleField);
  });
});
