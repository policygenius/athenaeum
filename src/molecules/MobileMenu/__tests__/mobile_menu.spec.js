import React from 'react';
import { shallow, mount } from 'enzyme';
import Text from 'atoms/Text';
import Icon from 'atoms/Icon';
import renderer from 'react-test-renderer';

import MobileMenu from 'molecules/MobileMenu';

describe('<MobileMenu />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      tabs: [],
      onClick: jest.fn(),
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(<MobileMenu {...defaultProps} />);

    expect(wrapper.type()).toEqual(MobileMenu);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<MobileMenu {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('gives the correct color to Text component', () => {
    const tabs = [
      { icon: 'phone', text: 'Expert Help', active: true, key: 1 },
      { icon: 'user', text: 'Save My Progress', active: false, key: 2 }
    ];

    const wrapper = shallow(<MobileMenu {...defaultProps} tabs={tabs} />);
    const activeText = wrapper.find(Text).first();

    expect(activeText.prop('color')).toEqual('neutral-2');

    const inactiveText = wrapper.find(Text).last();

    expect(inactiveText.prop('color')).toEqual('neutral-3');
  });

  it('gives the correct className to Icon component', () => {
    const tabs = [
      { icon: 'phone', text: 'Expert Help', active: true, key: 1 },
      { icon: 'user', text: 'Save My Progress', active: false, key: 2 }
    ];

    const wrapper = shallow(<MobileMenu {...defaultProps} tabs={tabs} />);
    const activeIcon = wrapper.find(Icon).first();

    expect(activeIcon.prop('className')).toEqual('icon-active');

    const inactiveIcon = wrapper.find(Icon).last();

    expect(inactiveIcon.prop('className')).toEqual('icon-inactive');
  });

  it('gives the correct classname to tab wrapper', () => {
    const tabs = [
      { icon: 'phone', text: 'Expert Help', active: true, key: 1 },
      { icon: 'user', text: 'Save My Progress', active: false, key: 2 }
    ];

    const wrapper = shallow(<MobileMenu {...defaultProps} tabs={tabs} />);
    const activeTab = wrapper.find('li').first();

    expect(activeTab.prop('className')).toEqual('tab active');

    const inactiveTab = wrapper.find('li').last();

    expect(inactiveTab.prop('className')).toEqual('tab inactive');
  });
});
