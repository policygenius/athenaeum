import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import { HtmlElements, Span, P, Div, } from 'atoms/Elementals';
import Element from 'atoms/Element';

describe('Elementals', () => {


  it('returns all html-tag Elements', () => {
    const htmlElements = HtmlElements();

    expect(Object.keys(htmlElements).length).to.equal(148);
    expect(htmlElements.P).to.be.function;
  });


  describe('Generates <Element />', () => {
    it('<Element />', () => {
      const wrapper = shallow(<Div />);

      expect(wrapper.type()).to.equal(Element);
      expect(wrapper.contains(<Element tag='div' />)).to.be.true;

    });

    it('<Span /> renders a <span />', () => {
      const wrapper = mount(<Span />);

      expect(wrapper.find('span').length).to.equal(1);
    });

    it('<P /> renders a <p />', () => {
      const wrapper = mount(<P />);

      expect(wrapper.find('p').length).to.equal(1);
    });

  });

});
