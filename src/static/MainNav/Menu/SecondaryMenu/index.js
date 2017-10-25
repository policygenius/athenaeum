import React from 'react';

import List from 'atoms/List';
import StyledWrapper from 'atoms/StyledWrapper';

import MenuLink from '../MenuLink';
import styles from '../menu.module.scss';
import { secondaryMenu } from './styles';

const SecondaryMenu = props =>
  <StyledWrapper
    css={secondaryMenu(props)}
    component={List}
    horizontal={{ spaceBetween: 12 }}
    className={styles['secondary-menu']}
  >
    <MenuLink
      header='Contact'
      href='/about/contact'
      activeName='contact'
      {...props}
    />
    <MenuLink
      header='Account'
      href='/users/sign_in'
      activeName='account'
      {...props}
    />
  </StyledWrapper>

;

export default SecondaryMenu;
