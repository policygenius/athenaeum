import React from 'react';

// import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import PartnerCard from 'organisms/cards/PartnerCard';

describe('<PartnerCard />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<PartnerCard />);

    expect(wrapper.type()).toEqual(PartnerCard);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<PartnerCard />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
