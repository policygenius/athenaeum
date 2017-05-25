import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Element from 'atoms/Element';

describe('<Element />', () => {

  it('renders', () => {
    const wrapper = mount(<Element />);

    expect(wrapper.type()).to.equal(Element);
  });

  describe('Default', () => {
    it('default generates a <div> with no classes', () => {
      const wrapper = shallow(<Element />);

      expect(wrapper.is('div')).to.be.true;
      expect(wrapper.hasClass('div')).to.be.false;
    });
  });

  describe('DOM Node generator', () => {
    it('generates a <p> element with .p class', () => {
      const wrapper = shallow(<Element tag='p' />);

      expect(wrapper.is('p')).to.be.true;
      expect(wrapper.hasClass('p')).to.be.true;
    });

    it('has className .s-{number} for prop.spacer', () => {
      const wrapper = shallow(<Element spacer={1} />);

      expect(wrapper.hasClass('bot-1')).to.be.true;
    });

    it('has className .typo-{number} for prop.typography', () => {
      const wrapper = shallow(<Element typography={4} />);

      expect(wrapper.hasClass('typ-4')).to.be.true;
    });

    it('has className .{color-name} for prop.color', () => {
      const wrapper = shallow(<Element color='brand-2' />);

      expect(wrapper.hasClass('brand-2')).to.be.true;
    });

    it('has className .{weight-name} for prop.weight', () => {
      const wrapper = shallow(<Element weight='semibold' />);

      expect(wrapper.hasClass('semibold')).to.be.true;
    });

    it('has classNames based on its avaialble props', () => {
      const wrapper = shallow(
        <Element
          typography={2}
          color='brand-3'
          weight='light'
          spacer={3}
          className='custom-class'
        />
      );

      expect(wrapper.hasClass('typ-2')).to.be.true;
      expect(wrapper.hasClass('brand-3')).to.be.true;
      expect(wrapper.hasClass('light')).to.be.true;
      expect(wrapper.hasClass('bot-3')).to.be.true;
      expect(wrapper.hasClass('custom-class')).to.be.true;
    });
  });

});
