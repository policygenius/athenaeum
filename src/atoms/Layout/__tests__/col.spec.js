import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Col from 'atoms/Layout/Col';

describe('Col', () => {

  it('is a <Col> tag', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.length).to.equal(1);
  });

  it('applies the `flex` class', () => {
    const wrapper = shallow(<Col flex />);

    expect(wrapper.hasClass('flex')).to.be.true;
  });

  it('applies the `fullWidth` class', () => {
    const wrapper = shallow(<Col fullwidth />);

    expect(wrapper.hasClass('fullwidth')).to.be.true;
  });


  it('applies size based col classes', () => {
    const colProps = {
      smallCols: 1,
      mediumCols: 2,
      largeCols: 3,
      xLargeCols: 4,
      xxLargeCols: 5,
    };

    const wrapper = shallow(<Col {...colProps} />);

    expect(wrapper.hasClass('col-sm-1')).to.be.true;
    expect(wrapper.hasClass('col-md-2')).to.be.true;
    expect(wrapper.hasClass('col-lg-3')).to.be.true;
    expect(wrapper.hasClass('col-xlg-4')).to.be.true;
    expect(wrapper.hasClass('col-xxlg-5')).to.be.true;
  });


});
