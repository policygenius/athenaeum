import React from 'react';
//import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StarRating from 'molecules/StarRating';

describe('<StarRating />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<StarRating />);

    expect(wrapper.type()).toEqual(StarRating);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<StarRating />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
