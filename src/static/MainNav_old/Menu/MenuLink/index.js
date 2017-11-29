import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { A } from 'atoms/Elementals';
import styles from '../main_nav_primary_menu.module.scss';

function MenuLink(props) {
  const {
    header,
    href,
    secondary,
  } = props;

  const classes = [
    styles['header-wrapper'],
    secondary && styles['secondary-header-wrapper'],
  ];

  return (
    <li className={classnames(...classes)} data-has-children='true'>
      <A
        className={styles['menu-header']}
        href={href}
        color='neutral-2'
        weight='semibold'
      >
        { header }
      </A>
    </li>
  );
}

MenuLink.propTypes = {
  header: PropTypes.string,
  href: PropTypes.string,
  secondary: PropTypes.bool,
};

export default MenuLink;
