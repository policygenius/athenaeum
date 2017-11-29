import React from 'react';

import Icon from 'atoms/Icon';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './logo.module.scss';

const Logo = () =>
  <LinkWrapper
    className={styles['main-nav-icon-wrapper']}
    href='/'
  >
    <Icon
      icon='pgLogoBlack'
      height='22px'
      width='122px'
      className={styles['main-nav-icon']}
    />
  </LinkWrapper>

;

export default Logo;
