import React from 'react';
import Sticky from 'react-stickynode';
import { shallow } from 'enzyme';

import UserAlert from 'atoms/UserAlert';
import Icon from 'atoms/Icon';

describe('<UserAlert />', () => {
  it('renders Sticky component', () => {
    const wrapper = shallow(<UserAlert />);

    expect(wrapper.find(Sticky).length).toEqual(1);
  });

  it('renders Icon with closeAccent prop', () => {
    const wrapper = shallow(<UserAlert />);

    const icon = wrapper.find(Icon);

    expect(icon.length).toEqual(1);
    expect(icon.props().icon).toEqual('closeAccent');
  });
});
