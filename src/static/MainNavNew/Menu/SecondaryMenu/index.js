import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from 'atoms/List';

import MenuLink from '../MenuLink';
import styles from './secondary_menu.module.scss';
import sharedStyles from '../menu.module.scss';

const SecondaryMenu = (props) => {
  const { overflowMenu } = props;

  const classes = classnames(
    sharedStyles['secondary-menu'],
    styles.list,
    overflowMenu && styles['list-overflow']
  );

  return (
    <List
      horizontal={{ spaceBetween: 12 }}
      className={classes}
    >
      <MenuLink
        header='Contact'
        href='/about/contact'
        activeName='contact'
        {...props}
      />
      <MenuLink
        header='Account'
        href='/users/sign_in'
        activeName='account'
        {...props}
      />
    </List>
  );
};

SecondaryMenu.propTypes = {
  overflowMenu: PropTypes.bool,
};

export default SecondaryMenu;
