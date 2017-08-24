import React, { Component } from 'react';

import Intro from '../Intro';
import SubMenuList from '../SubMenuList';
import BlogArticleList from '../BlogArticleList';

import styles from '../main_nav_submenu.module.scss';

class MagazineDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      headerText,
      setMobileCollpaseMenu,
      intro,
      active,
      activeName,
    } = this.props;

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
            product={intro.textType}
            linkHref={intro.link}
            active={active === activeName}
          />

          {/* SubMenu then iterate over BlogArticle */}

          <li className={styles['mobile-scroll-buffer']}></li>
        </ul>
      </div>
    );
  }
}

export default MagazineDisplay;

