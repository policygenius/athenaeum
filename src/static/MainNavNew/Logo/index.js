import React from 'react';

import Icon from 'atoms/Icon';
import LinkWrapper from 'atoms/LinkWrapper';
import StyledWrapper from 'atoms/StyledWrapper';

import { logo } from './styles';

const Logo = () =>
  <StyledWrapper
    css={logo}
    component={LinkWrapper}
    href='/'
  >
    <Icon
      icon='pgLogoBlack'
      height='22px'
      width='122px'
      className='main-nav-icon'
    />
  </StyledWrapper>

;

export default Logo;
