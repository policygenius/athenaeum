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
        activeName={props.menu.activeName}
        headerText={props.menu.header}
        setMobileCollapsedMenu={props.setMobileCollapsedMenu}
      />
    );
  }

  if (props.magazine) {
    return (
      <MagazineDisplay
        intro={props.intro}
        active={props.active}
        activeName={props.menu.activeName}
        headerText={props.menu.header}
        tag={props.menu.tag}
        setMobileCollapsedMenu={props.setMobileCollapsedMenu}
      />
    );
  }

  return null;
}

function getOnClick(props) {
  const {
    menu: {
      link,
      activeName,
    },
    showMobileMenu,
    magazine,
    setMobileCollapsedMenu,
  } = props;

  if (showMobileMenu && !magazine) {
    return () => setMobileCollapsedMenu(activeName);
  }

  if (!link) {
    return (e) => {
      e.stopPropagation();

      return false;
    };
  }

  return () => true;
}

function SubMenu(props) {
  const {
    menu: {
      header,
      link,
      activeName,
    },
    active,
    setActiveSubTab,
    showMobileMenu,
    mobileCollapsedMenu,
    hasChildren,
    magazine,
  } = props;

  const classes = [
    styles['item'],
    hasChildren && styles['has-content'],
    active === activeName && styles['active'],
    mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
  ];

  return (
    /*
      Removing magazine headers from mobile menu functionality because of
      issues with mobile Safari not fetching blog posts.
      Will need to remove this once we have a solution
    */
    <li
      className={classnames(...classes)}
      onMouseEnter={!showMobileMenu ? () => setActiveSubTab(activeName) : () => true}
      onMouseLeave={!showMobileMenu ? () => setActiveSubTab(null) : () => true}
    >
      <LinkWrapper
        className={styles['header']}
        href={showMobileMenu && !magazine ? null : link}
        onClick={getOnClick(props)}
        variant='no-text-decoration'
        color='neutral-2'
      >
        { header }
      </LinkWrapper>

      { hasChildren && getChildren(props) }
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
  menu: PropTypes.object,
  hasChildren: PropTypes.bool,
  magazine: PropTypes.bool,
};

getChildren.propTypes = {
  list: PropTypes.object,
  product: PropTypes.bool,
  magazine: PropTypes.bool,
  intro: PropTypes.object,
  active: PropTypes.string,
  menu: PropTypes.object,
  setMobileCollapsedMenu: PropTypes.func,
};

export default SubMenu;
