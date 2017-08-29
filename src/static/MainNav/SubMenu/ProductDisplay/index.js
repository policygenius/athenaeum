import React from 'react';
import PropTypes from 'prop-types';

import Intro from '../Intro';
import SubMenuList from '../SubMenuList';
import ProductArticleList from '../ArticleList/Product';

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
          <ProductArticleList
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
    setMobileCollapsedMenu,
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

ProductDisplay.propTypes = {
  intro: PropTypes.object,
  headerText: PropTypes.string,
  activeName: PropTypes.string,
  active: PropTypes.string,
  setMobileCollapsedMenu: PropTypes.func,
};

getList.propTypes = {
  list: PropTypes.array,
  activeName: PropTypes.string,
  active: PropTypes.string,
};

export default ProductDisplay;
