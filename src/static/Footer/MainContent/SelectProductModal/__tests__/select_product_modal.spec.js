import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SelectProductModal from '../';

describe('<SelectProductModal />', () => {
  it('renders correctly', () => {
    const wrapper = mount(<SelectProductModal />);

    expect(wrapper.type()).toEqual(SelectProductModal);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<SelectProductModal />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
