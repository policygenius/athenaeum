import React from 'react';
import { shallow } from 'enzyme';
import assign from 'lodash/assign';

import SubMenu from '../';
import ProductDisplay from '../ProductDisplay';
import MagazineDisplay from '../MagazineDisplay';

describe('<SubMenu />', () => {
  describe('rendering', () => {
    describe('no children', () => {
      let props;
      let wrapper;

      beforeEach(() => {
        props = {
          menu: {
            header: 'test',
            link: 'test-link/',
            activeName: 'test-activeName',
          },
          active: 'test-active',
          setActiveSubTab: jest.fn(),
          setMobileCollapsedMenu: jest.fn(),
          mobileCollapsedMenu: 'test-mobile-collapsed',
        };

        wrapper = shallow(<SubMenu {...props} />);
      });

      it('does not add has-content class to top level li', () => {
        expect(wrapper.find('li').hasClass('has-content')).toBe(false);
      });

      it('does not render either <ProductDisplay /> or <MagazineDisplay />', () => {
        expect(wrapper.find(ProductDisplay).length).toEqual(0);
        expect(wrapper.find(MagazineDisplay).length).toEqual(0);
      });
    });

    describe('has children', () => {
      let props;

      beforeEach(() => {
        props = {
          menu: {
            header: 'test',
            link: 'test-link/',
            activeName: 'test-activeName',
          },
          intro: {},
          active: 'test-active',
          setActiveSubTab: jest.fn(),
          setMobileCollapsedMenu: jest.fn(),
          mobileCollapsedMenu: 'test-mobile-collapsed',
        };
      });

      it('does not add has-content class to top level li', () => {
        const productProps = assign({}, props, {
          list: {},
          product: true
        });

        const wrapper = shallow(
          <SubMenu {...productProps} hasChildren>
            <p>Hello World</p>
          </SubMenu>
        );

        expect(wrapper.find('li').hasClass('has-content')).toBe(true);
      });

      it('renders <ProductDisplay if props.product', () => {
        const productProps = assign({}, props, {
          list: {},
          product: true
        });

        const wrapper = shallow(
          <SubMenu {...productProps} hasChildren>
            <p>Hello World</p>
          </SubMenu>
        );

        expect(wrapper.find(ProductDisplay).length).toEqual(1);
      });

      it('renders <MagazineDisplay /> if props.magazine', () => {
        const magazineProps = assign({}, props, {
          tag: 'test-tag',
          magazine: true
        });

        const wrapper = shallow(
          <SubMenu {...magazineProps} hasChildren>
            <p>Hello World</p>
          </SubMenu>
        );

        expect(wrapper.find(MagazineDisplay).length).toEqual(1);
      });
    });
  });
});
