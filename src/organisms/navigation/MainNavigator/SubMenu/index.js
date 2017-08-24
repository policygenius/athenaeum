import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkWrapper from 'atoms/LinkWrapper';

import ProductDisplay from './ProductDisplay';
import MagazineDisplay from './MagazineDisplay';
import styles from './main_nav_submenu.module.scss';

function getChildren(props) {
  if (props.product) {
    return (
      <ProductDisplay
        intro={props.intro}
        list={props.list}
        active={props.active}
        activeName={props.activeName}
        headerText={props.headerText}
      />
    );
  }

  if (props.magazine) {
    return (
      <MagazineDisplay
        intro={props.intro}
        active={props.active}
        activeName={props.activeName}
        headerText={props.headerText}
      />
    );
  }

  return null;
}

function SubMenu(props) {
  const {
    headerText,
    headerLink,
    active,
    activeName,
    setActiveSubTab,
    showMobileMenu,
    setMobileCollapsedMenu,
    mobileCollapsedMenu,
    hasChildren,
  } = props;

  const classes = [
    styles['item'],
    hasChildren && styles['has-content'],
    active === activeName && styles['active'],
    mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
  ];

  return (
    <li
      className={classnames(...classes)}
      onMouseEnter={() => setActiveSubTab(activeName)}
      onMouseLeave={() => setActiveSubTab(null)}
    >
      <LinkWrapper
        className={styles['header']}
        href={showMobileMenu ? null : headerLink}
        onClick={
          showMobileMenu ? () => setMobileCollapsedMenu(activeName) : () => true
        }
        variant='no-text-decoration'
        color='neutral-2'
      >
        { headerText }
      </LinkWrapper>

      { getChildren(props) }
    </li>
  );
}

SubMenu.propTypes = {
  headerText: PropTypes.string,
  headerLink: PropTypes.string,
  active: PropTypes.string,
  activeName: PropTypes.string,
  setActiveSubTab: PropTypes.func,
  intro: PropTypes.object,
  list: PropTypes.object,
  showMobileMenu: PropTypes.bool,
  setMobileCollapsedMenu: PropTypes.func,
  mobileCollapsedMenu: PropTypes.string,
};

export default SubMenu;
