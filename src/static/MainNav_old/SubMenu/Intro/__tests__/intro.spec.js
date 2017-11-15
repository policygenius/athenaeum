import React from 'react';
import { shallow } from 'enzyme';
import assign from 'lodash/assign';

import Intro from '../';
import IntroText from '../IntroText';

describe('<Intro />', () => {
  describe('rendering', () => {
    it('renders <IntroText />', () => {
      const props = {
        product: 'test-product',
        linkHref: 'test-href/',
      };

      const wrapper = shallow(<Intro {...props} />);

      const introText = wrapper.find(IntroText);

      expect(introText.length).toEqual(1);
      expect(introText.props().product).toEqual(props.product);
      expect(introText.props().link).toEqual(props.linkHref);
    });

    it('renders cta if prop provided', () => {
      const props = {
        product: 'test-product',
        linkHref: 'test-href/',
      };

      const wrapper = shallow(<Intro {...props} />);

      expect(wrapper.find('button').length).toEqual(0);

      wrapper.setProps({ cta: 'test-cta', imgSrc: 'test-imgSrc' });

      expect(wrapper.find('button').length).toEqual(1);
    });

    it('adds src prop to img when not loading', () => {
      const props = {
        product: 'test-product',
        linkHref: 'test-href/',
        active: false,
        cta: 'test-cta',
        imgSrc: 'test-src',
      };

      const wrapper = shallow(<Intro {...props} />);

      expect(wrapper.find('img').props().src).toEqual(undefined);

      wrapper.setProps(assign({}, props, { active: true }));

      expect(wrapper.find('img').props().src).toEqual(props.imgSrc);
    });
  });
});
