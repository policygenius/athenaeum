import React from 'react';

// import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PlaybackCardWrapper from 'organisms/cards/PlaybackCardWrapper';

describe('<PlaybackCardWrapper />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders', () => {
    const wrapper = shallow(<PlaybackCardWrapper />);

    expect(wrapper.length).to.equal(1);
  });
});
