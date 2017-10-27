import React, { Component } from 'react';

import Spacer from 'atoms/Spacer';
import StyledWrapper from 'atoms/StyledWrapper';

import { resourcesStyle, resourcesBottom } from './styles';
import Resource from './Resource';
import { resourcesList } from '../data/resources';
import { RESOURCES } from '../constants';

class ResourceList extends Component {

  constructor() {
    super();

    this.state = {
      insuranceGuidesCollapsed: false,
      geniusCenterCollapsed: false,
      helpfulResourcesCollapsed: false,
      reviewsCollapsed: false,
    };
  }

  isMobile = () => window.outerWidth <= 769;

  toggleResource = (resource) => {
    if (!this.isMobile()) return;
    switch (resource) {
        case RESOURCES.INSURANCE_GUIDES:
          this.setState({
            insuranceGuidesCollapsed: !this.state.insuranceGuidesCollapsed
          });
          break;
        case RESOURCES.GENIUS_CENTER:
          this.setState({
            geniusCenterCollapsed: !this.state.geniusCenterCollapsed
          });
          break;
        case RESOURCES.HELPFUL_RESOURCES:
          this.setState({
            helpfulResourcesCollapsed: !this.state.helpfulResourcesCollapsed
          });
          break;
        case RESOURCES.REVIEWS:
          this.setState({
            reviewsCollapsed: !this.state.reviewsCollapsed
          });
          break;
        default:

    }
  }

  render() {
    return (
      <div>
        <StyledWrapper
          css={resourcesStyle}
        >
          <Resource
            resources={resourcesList[RESOURCES.INSURANCE_GUIDES]}
            icon={this.state.insuranceGuidesCollapsed ? 'chevronDown' : 'chevronUp'}
            onClick={() => this.toggleResource(RESOURCES.INSURANCE_GUIDES)}
            collapsed={this.state.insuranceGuidesCollapsed}
          />
          <Resource
            resources={resourcesList[RESOURCES.GENIUS_CENTER]}
            icon={this.state.geniusCenterCollapsed ? 'chevronDown' : 'chevronUp'}
            onClick={() => this.toggleResource(RESOURCES.GENIUS_CENTER)}
            collapsed={this.state.geniusCenterCollapsed}
          />
        </StyledWrapper>
        <StyledWrapper
          css={resourcesStyle}
        >
          <Resource
            resources={resourcesList[RESOURCES.HELPFUL_RESOURCES]}
            icon={this.state.helpfulResourcesCollapsed ? 'chevronDown' : 'chevronUp'}
            onClick={() => this.toggleResource(RESOURCES.HELPFUL_RESOURCES)}
            collapsed={this.state.helpfulResourcesCollapsed}
          />
          <Resource
            resources={resourcesList[RESOURCES.REVIEWS]}
            icon={this.state.reviewsCollapsed ? 'chevronDown' : 'chevronUp'}
            onClick={() => this.toggleResource(RESOURCES.REVIEWS)}
            collapsed={this.state.reviewsCollapsed}
          />
        </StyledWrapper>
        <StyledWrapper css={resourcesBottom} />
      </div>
    );
  }
}
export default ResourceList;
