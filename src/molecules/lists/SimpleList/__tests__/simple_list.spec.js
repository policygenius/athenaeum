import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SimpleList from 'molecules/lists/SimpleList';

describe('<SimpleList />', () => {

  it('renders', () => {
    const wrapper = shallow(<SimpleList />);

    expect(wrapper.length).to.equal(1);
  });
});
