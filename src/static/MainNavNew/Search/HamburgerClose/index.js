import React from 'react';
import PropTypes from 'prop-types';

import IconWrapper from '../IconWrapper';
import styles from '../search.module.scss';

const getOnClick = props =>
  props.searching ? () => props.toggleSearching(false) : () => props.toggleMobileMenu(!props.showMobileMenu)

;

function HamburgerClose(props) {
  const {
    showMobileMenu,
    searching
  } = props;

  const icon = showMobileMenu || searching ? 'close' : 'hamburgerRebrand';
  const onClick = getOnClick(props);

  return (
    <IconWrapper
      icon={icon}
      onClick={onClick}
      className={styles['hamburger-close-icon']}
    />
  );
}

HamburgerClose.propTypes = {
  showMobileMenu: PropTypes.bool,
  toggleMobileMenu: PropTypes.func,
  searching: PropTypes.bool,
};

export default HamburgerClose;
