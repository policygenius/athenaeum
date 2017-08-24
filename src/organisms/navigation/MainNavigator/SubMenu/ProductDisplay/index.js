import React from 'react';

import Intro from '../Intro';
import SubMenuList from '../SubMenuList';
import BlogArticleList from '../BlogArticleList';

import styles from '../main_nav_submenu.module.scss';

function getList({ list, active, activeName }) {
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
            active={active === activeName}
          />
        );
      default:
        return null;
  }
}

function ProductDisplay(props) {
  const {
    intro,
    headerText,
    activeName,
    active,
  } = props;

  return (
    <div className={styles['wrapper']}>
      <ul className={styles['panel']}>
        <li
          className={styles['mobile-back-wrapper']}
          onClick={() => setMobileCollapsedMenu(null)}
        >
          <span className={styles['mobile-back-header']}>{ headerText }</span>
        </li>

        <Intro
          cta={intro.cta}
          product={activeName}
          imgSrc={intro.imgSrc}
          linkHref={intro.linkHref}
          active={active === activeName}
        />

        { getList(props) }

        <li className={styles['mobile-scroll-buffer']}></li>
      </ul>
    </div>
  );
}

export default ProductDisplay;
