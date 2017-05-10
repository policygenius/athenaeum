import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DataRow from 'molecules/DataRow';

/* eslint-disable no-undef*/
jest.mock('atoms/Icon', () => function Icon() {});
/* eslint-enable no-undef*/

describe('<DataRow />', () => {

  it('renders', () => {
    const wrapper = shallow(<DataRow label='Some data' value={100} />);

    expect(wrapper.length).to.equal(1);
  });
});
