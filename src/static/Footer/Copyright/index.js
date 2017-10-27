import React from 'react';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import Spacer from 'atoms/Spacer';
import Br from 'atoms/Br';
import StyledWrapper from 'atoms/StyledWrapper';

import { copyright } from './styles';

const Copyright = () =>
  <Hide hideOn='medium large xLarge xxLarge'>
    <StyledWrapper
      css={copyright}
    >
      <Text
        type={10}
        font='b'
      >
          Copyright PolicyGenius © 2014-2017
        </Text>
      <Spacer size={18} />
      <Text type={10} font='b'>
          22 West 19th St, Floor 8
          <Br small />
          New York, NY 10011
        </Text>
      <Spacer size={36} />
      <div className='icon-list'>
        <Icon
          icon='madeInNy'
          height='48px'
          width='48px'
          className='made-in-ny'
        />
        <Icon
          icon='norton'
          height='70px'
          width='75px'
        />
      </div>
    </StyledWrapper>
  </Hide>

  ;

export default Copyright;
