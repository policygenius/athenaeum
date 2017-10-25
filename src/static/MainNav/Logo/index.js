import React from 'react';
import {
  Icon,
  Col,
  StyledWrapper,
  LinkWrapper,
} from 'athenaeum';

import { logo } from './styles';

const Logo = () => (
  <StyledWrapper
    css={logo}
    component={LinkWrapper}
    href="/"
  >
    <Icon
      icon="pgLogoBlack"
      height="22px"
      width="122px"
      className="main-nav-icon"
    />
  </StyledWrapper>
);

export default Logo;
