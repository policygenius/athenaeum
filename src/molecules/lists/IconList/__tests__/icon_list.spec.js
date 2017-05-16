import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import IconList from 'molecules/lists/IconList';

describe('<IconList />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      data: [
        { icon: 'checkmark', text: 'Item 1' },
        { icon: 'checkmark', text: 'Item 2' },
        { icon: 'checkmark', text: 'Item 3' },
        { icon: 'closeAccent', text: 'Item 4' },
        { icon: 'checkmark', text: 'Item 5' },
        { icon: 'closeAccent', text: 'Item 6' },
      ]
    };
  });

  it('renders same number of list items as data items', () => {
    const wrapper = shallow(<IconList {...defaultProps} />);

    expect(wrapper.find('li').length).to.equal(defaultProps.data.length);
  });
});
