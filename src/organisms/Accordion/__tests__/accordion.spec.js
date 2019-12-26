import React from 'react';

// import sinon from 'sinon';
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
    const actual = renderer.create(<Accordion />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
