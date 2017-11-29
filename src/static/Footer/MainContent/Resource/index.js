import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { generate } from 'shortid';

import Text from 'atoms/Text';
import Icon from 'atoms/Icon';
import List from 'atoms/List';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './resource.module.scss';

class Resource extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
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
      className
    } = this.props;

    return (
      <div className={cx(className, styles.resource)}>
        <div onClick={this.handleClick} role='presentation'>
          <Text
            type={7}
            font='a'
            className={styles.header}
          >
            { resources.header }
            <Icon
              icon={this.state.collapsed ? 'chevronDown' : 'chevronUp'}
              height='8px'
              width='24px'
              inline='right'
              className={styles.icon}
            />
          </Text>
        </div>
        <List
          bottomSpacing={13}
          noBullets
          className={cx(
            styles['resource-list'],
            this.state.collapsed && styles['collapsed-resources']
          )}
        >
          {
            resources.items.map(resource =>
              <LinkWrapper
                key={`resource-${generate()}`}
                href={resource.href}
              >
                <Text
                  type={10}
                  font='b'
                  inheritColor
                >
                  { resource.title }
                </Text>
              </LinkWrapper>
            )
          }
        </List>
      </div>
    );

  }
}

Resource.propTypes = {
  collapsed: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  resources: PropTypes.object,
  className: PropTypes.string
};

export default Resource;

