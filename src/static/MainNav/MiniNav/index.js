import React from 'react';
import PropTypes from 'prop-types';

import styles from './mini_nav.module.scss';

function MiniNav(props) {
  const {
    leftText,
    rightText,
  } = props;


  return (
    <div className={styles['mini-nav']}>
      <div className={styles['mini-nav-wrapper']}>
        <p className={styles['mini-nav-left-text']}>{leftText}</p>
        <p className={styles['mini-nav-right-text']}>{rightText}</p>
      </div>
    </div>

  );
}

MiniNav.propTypes = {
  leftText: PropTypes.string,
  rightText: PropTypes.string,
};

export default MiniNav;
