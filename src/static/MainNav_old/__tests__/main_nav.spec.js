import React from 'react';
import { shallow } from 'enzyme';

import MainNav from '../';
import Logo from '../Logo';
import MenuLink from '../Menu/MenuLink';
import PrimaryMenuWrapper from '../Menu/PrimaryMenuWrapper';
import SubMenu from '../SubMenu';

import insuranceProducts from '../data/products';
import magazineItems from '../data/magazineItems';
import aboutItems from '../data/aboutItems';

describe('<MainNav />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainNav />);
  });

  describe('rendering', () => {
    it('renders the <Logo />', () => {
      expect(wrapper.find(Logo).length).toEqual(1);
    });

    it('renders PrimaryMenuWrappers', () => {
      const menuWrapper = wrapper.find(PrimaryMenuWrapper);

      expect(menuWrapper.length).toEqual(3);

      expect(menuWrapper.findWhere(n => n.node.props.header === 'Insurance Quotes & Guides').length).toEqual(1);

      expect(menuWrapper.findWhere(n => n.node.props.header === 'Magazine').length).toEqual(1);

      expect(menuWrapper.findWhere(n => n.node.props.header === 'About').length).toEqual(1);
    });

    it('renders Insurance Checkup <MenuLink />', () => {
      const menuLink = wrapper.find(MenuLink);

      expect(menuLink.findWhere(n => n.node.props.header.includes('Insurance Checkup')).length).toEqual(1);
    });

    describe('renders <SubMenu />', () => {
      let submenu;

      beforeEach(() => {
        submenu = wrapper.find(SubMenu);
      });

      it('renders insuranceProducts', () => {
        insuranceProducts.forEach((product) => {
          expect(submenu.findWhere(n => n.node.props.menu === product.menu).length).toEqual(1);
        });
      });

      it('renders magazineItems', () => {
        magazineItems.forEach((item) => {
          expect(submenu.findWhere(n => n.node.props.menu === item.menu).length).toEqual(1);
        });
      });

      it('renders aboutItems', () => {
        aboutItems.forEach((item) => {
          expect(submenu.findWhere(n => n.node.props.menu.header === item.header).length).toEqual(1);
        });
      });
    });

    describe('renders secondary nav', () => {
      it('renders correct <MenuLink />', () => {
        const menuLink = wrapper.find(MenuLink);

        expect(menuLink.findWhere(n => n.node.props.secondary === true).length).toEqual(2);
        expect(menuLink.findWhere(n => n.node.props.header === 'Contact').length).toEqual(1);
        expect(menuLink.findWhere(n => n.node.props.header === 'Account').length).toEqual(1);
      });
    });
  });
});
