import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';

import sharedStyles from '../menu.module.scss';
import styles from '../PrimaryMenuHeader/primary_menu_header.module.scss';

function MenuLink(props) {
  const {
    header,
    href,
    activePrimaryTab,
    activeName,
    showMobileMenu
  } = props;

  const isActive = activePrimaryTab === activeName;

  const headerClasses = classnames(
    styles['primary-menu-header'],
    (isActive || showMobileMenu) && styles['primary-menu-header-dark'],
  );

  return (
    <LinkWrapper
      href={href}
      className={sharedStyles['menu-link']}
    >
      <Text
        font='a'
        size={10}
        className={headerClasses}
      >
        { header }
      </Text>
    </LinkWrapper>
  );
}

MenuLink.propTypes = {
  header: PropTypes.string,
  href: PropTypes.string,
  activePrimaryTab: PropTypes.string,
  activeName: PropTypes.string,
  showMobileMenu: PropTypes.bool,
};

export default MenuLink;
