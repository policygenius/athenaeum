import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DataRow from 'molecules/DataRow';

describe('DataRow', () => {

  it('is a <DataRow>', () => {
    const wrapper = shallow(<DataRow label='Some data' value={100} />);

    expect(wrapper.length).to.equal(1);
  });
});
