import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkWrapper from 'atoms/LinkWrapper';

import Intro from './Intro';
import SubMenuList from './SubMenuList';
import BlogArticleList from './BlogArticleList';
import styles from './main_nav_submenu.module.scss';

function getList(list) {
  switch (list.type) {
      case 'links':
        return (
        list.items.map((l, idx) =>
          <SubMenuList
            key={`life-submenu-list-${idx}`}
            header={l.header}
            listItems={l.items}
          />
        )
        );
      case 'articles':
        return (
          <BlogArticleList
            data={list.items}
            alt={list.alt}
          />
        );
      default:
        return null;
  }
}

function SubMenu(props) {
  const {
    headerText,
    headerLink,
    active,
    activeName,
    intro,
    list,
    setActiveSubTab,
    showMobileMenu,
    setMobileCollapsedMenu,
    mobileCollapsedMenu,
  } = props;

  const hasChildren = intro && list;

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

      { hasChildren &&
      <div className={styles['wrapper']}>
        <ul className={styles['panel']}>
          <li
            className={styles['mobile-back-wrapper']}
            onClick={() => setMobileCollapsedMenu(null)}
          >
            <div className={styles['mobile-back-header']}>
              <span className={styles['mobile-back-text']}>{ headerText }</span>
            </div>
          </li>

          <Intro
            cta={intro.cta}
            product={activeName}
            imgSrc={intro.imgSrc}
            linkHref={intro.linkHref}
          />

          { getList(list) }

          <li className={styles['mobile-scroll-buffer']}></li>
        </ul>
      </div>
      }
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
