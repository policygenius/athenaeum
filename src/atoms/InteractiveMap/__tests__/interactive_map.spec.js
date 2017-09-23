import React from 'react';
//import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import InteractiveMap from 'atoms/InteractiveMap';

describe('<InteractiveMap />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<InteractiveMap />);

    expect(wrapper.type()).toEqual(InteractiveMap);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<InteractiveMap />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
