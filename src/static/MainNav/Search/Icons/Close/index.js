import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './main_nav_close.module.scss';

function Close(props) {
  const {
    onClick,
    searching,
  } = props;

  const classes = [
    styles['close'],
    searching && styles['searching']
  ];

  return (
    <div className={classnames(...classes)} onClick={() => onClick(false)}>
      <span className={styles['close-icon']}></span>
    </div>
  );
}

Close.propTypes = {
  onClick: PropTypes.func,
  searching: PropTypes.bool,
};

export default Close;
