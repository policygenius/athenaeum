import React from 'react';
// import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import QuotesForm from 'organisms/QuotesForm';

describe('<QuotesForm />', () => {
  // let defaultProps;
  //
  // beforeEach(() => {
  //   defaultProps = {
  //     // Add default props here
  //   };
  // });

  it('renders correctly', () => {
    const wrapper = mount(<QuotesForm />);

    expect(wrapper.type()).toEqual(QuotesForm);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<QuotesForm />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
