import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './menu.module.scss';
import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';

const Menu = (props) => {
  const {
    searching,
    active,
    showMobileMenu,
    mobileCollapsedMenu,
  } = props;

  const wrapperClasses = [
    styles.wrapper,
    searching && styles.searching,
    !!mobileCollapsedMenu && styles['mobile-collapsed'],
  ];

  return (
    <div className={classnames(...wrapperClasses)}>
      <div className={styles.container}>
        <PrimaryMenu
          {...props}
        />
        <SecondaryMenu
          active={active}
          showMobileMenu={showMobileMenu}
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  searching: PropTypes.bool,
  active: PropTypes.string,
  showMobileMenu: PropTypes.bool,
  mobileCollapsedMenu: PropTypes.string,
};

export default Menu;
