import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import CircularLoader from 'atoms/CircularLoader';

describe('<CircularLoader />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<CircularLoader />);

    expect(wrapper.type()).toEqual(CircularLoader);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<CircularLoader />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
