import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ToggleField, { toBoolean } from 'molecules/formfields/ToggleField';

describe('<ToggleField />', () => {
  it('renders', () => {
    const wrapper = mount(<ToggleField input={{}} />);

    expect(wrapper.type()).to.equal(ToggleField);
  });
});

describe('toBoolean', () => {
  it('returns true correctly', () => {
    expect(toBoolean('true')).to.equal(true);
    expect(toBoolean(true)).to.equal(true);
  });

  it('returns false correctly', () => {
    expect(toBoolean('false')).to.equal(false);
    expect(toBoolean(false)).to.equal(false);
  });

  it('returns the value correctly', () => {
    expect(toBoolean('anything')).to.equal('anything');
    expect(toBoolean(1)).to.equal(1);
  });
});
