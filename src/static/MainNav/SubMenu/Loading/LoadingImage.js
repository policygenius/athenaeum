import React from 'react';
import classnames from 'classnames';

import sharedStyles from '../ArticleImage/main_nav_article_image.module.scss';
import styles from './main_nav_loading.module.scss';

const LoadingImage = () => (
  <div
    className={sharedStyles['article-wrapper']}
  >
    <div className={sharedStyles['figure']}>
      <div className={classnames(sharedStyles['image'], styles['image-loading'])} />

      <div className={styles['sub-tag-loading']} />
    </div>
  </div>
);

export default LoadingImage;
