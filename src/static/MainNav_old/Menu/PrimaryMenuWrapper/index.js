import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Span } from 'atoms/Elementals';
import styles from '../main_nav_primary_menu.module.scss';

function PrimaryMenuWrapper(props) {
  const {
    children,
    header,
    active,
    activeName,
    searching,
    onClick,
  } = props;

  const classes = [
    styles['header-wrapper'],
    children && styles['has-children'],
    (active === activeName) && styles['active'],
  ];

  const submenuClasses = [
    styles['submenu-wrapper'],
    (active === activeName) && !searching && styles['submenu-wrapper-active'],
  ];

  return (
    <li
      className={classnames(...classes)}
      onClick={() => onClick(activeName)}
    >
      <Span
        className={styles['menu-header']}
        weight='semibold'
        color='neutral-2'
      >
        { header }
      </Span>

      { children &&
      <div className={classnames(...submenuClasses)}>
        <ul className={styles['submenu']}>
          { children }
        </ul>
      </div>
      }
    </li>
  );
}

PrimaryMenuWrapper.propTypes = {
  header: PropTypes.string,
  active: PropTypes.string,
  activeName: PropTypes.string,
  onClick: PropTypes.func,
  searching: PropTypes.bool,
};

export default PrimaryMenuWrapper;
