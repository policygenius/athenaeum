import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Icon
} from 'athenaeum';

import IconWrapper from '../IconWrapper';
import { hamburgerCloseIcon } from '../styles';

const getOnClick = props => (
  props.searching ? () => props.toggleSearching(false) : () => props.toggleMobileMenu(!props.showMobileMenu)
);

function HamburgerClose(props) {
  const {
    showMobileMenu,
    toggleMobileMenu,
    searching
  } = props;

  const icon = showMobileMenu || searching ? 'closeRebrand' : 'hamburgerRebrand';
  const onClick = getOnClick(props);

  return (
    <IconWrapper
      icon={icon}
      css={hamburgerCloseIcon(props)}
      onClick={onClick}
    />
  );
}

HamburgerClose.propTypes = {
  showMobileMenu: PropTypes.bool,
  toggleMobileMenu: PropTypes.func,
  searching: PropTypes.bool,
};

export default HamburgerClose;
