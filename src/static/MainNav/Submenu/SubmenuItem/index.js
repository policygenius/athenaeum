/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Text,
  LinkWrapper,
} from 'athenaeum';

import styles from './submenu_item.module.scss';
import ProductDisplay from '../ProductDisplay';
import MagazineDisplay from '../MagazineDisplay';

class SubmenuItem extends React.Component {
  get submenuDisplayType() {
    const {
      displayType,
      item,
      mobileCollapsedMenu,
      setMobileCollapsedMenu,
      activeSubTab,
    } = this.props;

    if (displayType === 'magazine') {
      return (
        <MagazineDisplay
          intro={item.intro}
          activeName={item.menu.activeName}
          isActive={activeSubTab === item.menu.activeName}
          headerText={item.menu.header}
          tag={item.menu.tag}
          mobileCollapsedMenu={mobileCollapsedMenu}
          setMobileCollapsedMenu={setMobileCollapsedMenu}
        />
      );
    }

    if (displayType === 'product') {
      return (
        <ProductDisplay
          intro={item.intro}
          list={item.list}
          headerText={item.menu.header}
          isActive={activeSubTab === item.menu.activeName}
          activeName={item.menu.activeName}
          mobileCollapsedMenu={mobileCollapsedMenu}
          setMobileCollapsedMenu={setMobileCollapsedMenu}
        />
      );
    }

    return null;
  }

  get itemHover() {
    const {
      showMobileMenu,
      setActiveSubTab,
      item,
    } = this.props;

    if (showMobileMenu) return {};

    return {
      onMouseEnter: () => setActiveSubTab(item.menu.activeName),
      onMouseLeave: () => setActiveSubTab(null)
    };
  }

  // onClick needed for tablet devices to open display menu
  tabletOnClick = () => {
    const {
      setActiveSubTab,
      item
    } = this.props;

    return (e) => {
      e.stopPropagation();
      setActiveSubTab(item.menu.activeName);
      return false;
    };
  };

  render() {
    const {
      item,
      showMobileMenu,
      setMobileCollapsedMenu,
      displayType,
      showMobileCollpased,
      setActiveSubTab,
      activeSubTab
    } = this.props;

    const headerClasses = [
      styles['item-header-text'],
      activeSubTab === item.menu.activeName && styles.active,
    ];

    // need to add special padding to More link on Tablet
    const linkClasses = [
      styles['item-header-link'],
      item.menu.activeName === 'more' && styles['item-more-link'],
    ];

    return (
      <div
        className={styles.item}
        onClick={this.tabletOnClick()}
        {...this.itemHover}
      >
        <LinkWrapper
          className={classnames(...linkClasses)}
          href={showMobileMenu && displayType ? null : item.menu.link}
          onClick={
            showMobileMenu ? () => setMobileCollapsedMenu(item.menu.activeName) : () => true
          }
        >
          <Text
            type={10}
            font="b"
            color="neutral-1"
            className={classnames(...headerClasses)}
          >
            {item.menu.header}
          </Text>
        </LinkWrapper>

        { this.submenuDisplayType }
      </div>
    );
  }
}

SubmenuItem.propTypes = {
  item: PropTypes.object,
  showMobileMenu: PropTypes.bool,
  setMobileCollapsedMenu: PropTypes.func,
  displayType: PropTypes.string,
  showMobileCollpased: PropTypes.string,
  setActiveSubTab: PropTypes.func,
  activeSubTab: PropTypes.string,
  mobileCollapsedMenu: PropTypes.string,
};

export default SubmenuItem;
