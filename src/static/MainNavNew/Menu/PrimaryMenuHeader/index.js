/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from 'atoms/Text';

import styles from './primary_menu_header.module.scss';
import Submenu from '../../Submenu';

function PrimaryMenuHeader(props) {
  const {
    activePrimaryTab,
    setActivePrimaryTab,
    activeName,
    header,
    submenu,
    ...otherProps
  } = props;

  const isActive = activePrimaryTab === activeName;
  const aboutHeader = activeName === 'about';

  const headerClasses = classnames(
    styles['primary-menu-header'],
    (isActive || otherProps.showMobileMenu) && styles['primary-menu-header-dark'],
    aboutHeader && styles['primary-menu-header-about'],
  );

  return (
    <div
      onClick={() => setActivePrimaryTab(activeName)}
    >
      <Text
        font='a'
        type={10}
        className={headerClasses}
      >
        { header }
      </Text>

      {
        submenu &&
          <Submenu
            submenuItems={submenu}
            isActive={activeName === activePrimaryTab}
            activeName={activeName}
            {...otherProps}
          />
      }
    </div>
  );
}

PrimaryMenuHeader.propTypes = {
  activePrimaryTab: PropTypes.string,
  setActivePrimaryTab: PropTypes.func,
  activeName: PropTypes.string,
  header: PropTypes.string,
  submenu: PropTypes.array,
};

export default PrimaryMenuHeader;
