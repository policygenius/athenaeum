import React from 'react';
// import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import AccordionPanel from '../';

describe('<AccordionPanel />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<AccordionPanel />);

    expect(wrapper.type()).toEqual(AccordionPanel);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<AccordionPanel />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
