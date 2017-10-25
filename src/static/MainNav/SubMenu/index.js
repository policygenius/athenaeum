import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import {
  // List,
  // Text,
  // StyledWrapper
// } from 'athenaeum';

import Text from 'atoms/Text';
import StyledWrapper from 'atoms/StyledWrapper';
import List from 'atoms/List';

import styles from './submenu.module.scss';
import SubMenuItem from './SubMenuItem';
import SecondaryMenu from '../Menu/SecondaryMenu';

class SubMenu extends Component {
  constructor() {
    super();

    this.state = {
      activeSubTab: null,
    };
  }

  setActiveSubTab = (activeSubTab) => {
    this.setState({ activeSubTab });
  }

  render() {
    const {
      submenuItems,
      isActive,
      ...otherProps
    } = this.props;

    const classes = [
      styles['submenu-wrapper'],
      isActive && styles['submenu-wrapper-active'],
    ];

    const submenuClasses = [
      styles.submenu,
      this.props.activeName === 'about' && styles['tablet-about'],
    ];

    return (
      <div className={classnames(...classes)}>
        <List
          horizontal={{}}
          className={classnames(...submenuClasses)}
        >
          {
            submenuItems.map(item =>
              <SubMenuItem
                key={item.menu.activeName}
                item={item}
                activeSubTab={this.state.activeSubTab}
                setActiveSubTab={this.setActiveSubTab}
                {...otherProps}
              />
            )
          }
        </List>

        {
          otherProps.activeName === 'about' &&
            <SecondaryMenu overflowMenu />
        }

      </div>
    );
  }
}

SubMenu.propTypes = {
  submenuItems: PropTypes.array,
  isActive: PropTypes.bool,
  activeName: PropTypes.string,
};

export default SubMenu;
