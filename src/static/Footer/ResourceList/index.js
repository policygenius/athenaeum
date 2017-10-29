import React, { Component } from 'react';

import Spacer from 'atoms/Spacer';
import StyledWrapper from 'atoms/StyledWrapper';

import { resourcesStyle, resourcesBottom } from './styles';
import Resource from './Resource';
import { resourcesList } from '../data/resources';
import { RESOURCES } from '../constants';

const ResourceList = () =>
  <div>
    <StyledWrapper
      css={resourcesStyle}
    >
      <Resource
        resources={resourcesList[RESOURCES.INSURANCE_GUIDES]}
      />
      <Resource
        resources={resourcesList[RESOURCES.GENIUS_CENTER]}
      />
    </StyledWrapper>
    <StyledWrapper
      css={resourcesStyle}
    >
      <Resource
        resources={resourcesList[RESOURCES.HELPFUL_RESOURCES]}
      />
      <Resource
        resources={resourcesList[RESOURCES.REVIEWS]}
      />
    </StyledWrapper>
    <StyledWrapper css={resourcesBottom} />
  </div>

;

export default ResourceList;
