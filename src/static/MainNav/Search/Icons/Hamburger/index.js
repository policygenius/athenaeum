import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './main_nav_hamburger.module.scss';

function Hamburger(props) {
  const {
    showMobileMenu,
    onClick,
  } = props;

  const classes = [
    styles['hamburger'],
    showMobileMenu && styles['mobile']
  ];

  return (
    <div className={classnames(...classes)} onClick={() => onClick(!showMobileMenu)}>
      <span className={styles['hamburger-icon']}></span>
    </div>
  );
}

Hamburger.propTypes = {
  showMobileMenu: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
