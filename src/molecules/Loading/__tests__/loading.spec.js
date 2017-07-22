import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Loading from 'molecules/Loading';

describe('<Loading />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<Loading messages={[]} />);

    expect(wrapper.type()).toEqual(Loading);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Loading messages={[]} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
