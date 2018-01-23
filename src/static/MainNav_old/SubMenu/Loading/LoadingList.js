import React from 'react';

import sharedStyles from '../SubMenuList/main_nav_submenu_list.module.scss';
import styles from './main_nav_loading.module.scss';

const LoadingList = () =>
  (<div className={sharedStyles['wrapper']}>
    <div className={styles['list-item-loading']} />
    <div className={styles['list-item-loading']} />
    <div className={styles['list-item-loading']} />
    <div className={styles['list-item-loading']} />
    <div className={styles['list-item-loading']} />
  </div>)

;

export default LoadingList;
