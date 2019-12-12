import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Accordion from 'organisms/Accordion';

describe('<Accordion />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<Accordion />);

    expect(wrapper.type()).toEqual(Accordion);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Accordion />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
