import React from 'react';

import styles from './main_nav_logo.module.scss';

const Logo = () =>
  (<div className={styles['logo']}>
    <a href='/'>
      <img alt='PolicyGenius' src='https://res-3.cloudinary.com/policygenius/image/upload/v1/general/pg-logo-tab.svg' />
    </a>
  </div>)

;

export default Logo;
