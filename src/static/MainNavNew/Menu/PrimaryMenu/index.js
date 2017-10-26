import React, { Component } from 'react';

import List from 'atoms/List';

import styles from '../menu.module.scss';
import PrimaryMenuHeader from '../PrimaryMenuHeader';
import MenuLink from '../MenuLink';
import insuranceProducts from '../../data/products';
import magazineItems from '../../data/magazineItems';
import aboutItems from '../../data/aboutItems';

class PrimaryMenu extends Component {
  render() {
    return (
      <List
        horizontal={{}}
        className={styles['primary-menu']}
      >
        <PrimaryMenuHeader
          header='Insurance Quotes & Guides'
          activeName='insurance'
          submenu={insuranceProducts}
          displayType='product'
          {...this.props}
        />
        <MenuLink
          header='Insurance Checkup'
          activeName='checkup'
          href='/insurance-checkup-and-advice'
          {...this.props}
        />
        <PrimaryMenuHeader
          header='Magazine'
          activeName='magazine'
          submenu={magazineItems}
          displayType='magazine'
          {...this.props}
        />
        <PrimaryMenuHeader
          header='About'
          activeName='about'
          submenu={aboutItems}
          {...this.props}
        />
      </List>
    );
  }
}

export default PrimaryMenu;
