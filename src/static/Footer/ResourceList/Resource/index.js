import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { generate } from 'shortid';

import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import StyledWrapper from 'atoms/StyledWrapper';
import Text from 'atoms/Text';
import Icon from 'atoms/Icon';
import Spacer from 'atoms/Spacer';
import List from 'atoms/List';
import Hide from 'wrappers/Hide';
import LinkWrapper from 'atoms/LinkWrapper';

class Resource extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
    };
  }

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const {
      resources,
    } = this.props;

    const resourceClasses = [
      'resources-list',
      this.state.collapsed && 'collapsed-resources',
    ];

    return (
      <Col className='resource-group'>
        <div onClick={this.handleClick} role='presentation'>
          <Text
            type={7}
            font='a'
          >
            { resources.header }
            <Icon
              icon={this.state.collapsed ? 'chevronDown' : 'chevronUp'}
              height='8px'
              width='24px'
              inline='right'
              className='icon'
            />
          </Text>
        </div>
        <Spacer size={12} />
        <List bottomSpacing={18} noBullets className={classnames(...resourceClasses)}>
          {
            resources.items.map(resource =>
              <LinkWrapper
                key={`resource-${generate()}`}
                color='neutral-1'
                href={resource.href}
              >
                <Text
                  type={10}
                  font='b'
                >
                  { resource.title }
                </Text>
              </LinkWrapper>
            )
          }
        </List>
        <Spacer size={18} />
        <Hide hideOn='small'><Spacer size={60} /></Hide>
      </Col>
    );

  }
}

Resource.propTypes = {
  collapsed: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  resources: PropTypes.object
};

export default Resource;

