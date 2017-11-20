import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from 'atoms/List';

import styles from './submenu.module.scss';
import SubmenuItem from './SubmenuItem';
import SecondaryMenu from '../Menu/SecondaryMenu';

class Submenu extends Component {
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

    const classes = classnames(
      styles['submenu-wrapper'],
      isActive && styles['submenu-wrapper-active'],
    );

    const submenuClasses = classnames(
      styles.submenu,
      this.props.activeName === 'about' && styles['tablet-about'],
    );

    return (
      <div className={classes}>
        <List
          horizontal={{}}
          className={submenuClasses}
        >
          {
            submenuItems.map(item =>
              <SubmenuItem
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

Submenu.propTypes = {
  submenuItems: PropTypes.array,
  isActive: PropTypes.bool,
  activeName: PropTypes.string,
};

export default Submenu;
