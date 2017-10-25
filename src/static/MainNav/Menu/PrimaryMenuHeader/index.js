/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import StyledWrapper from 'atoms/StyledWrapper';

import { primaryHeader } from './styles';
import SubMenu from '../../SubMenu';

function PrimaryMenuHeader(props) {
  const {
    activePrimaryTab,
    setActivePrimaryTab,
    activeName,
    header,
    submenu,
    ...otherProps
  } = props;

  return (
    <div
      onClick={() => setActivePrimaryTab(activeName)}
    >
      <StyledWrapper
        css={primaryHeader(props)}
        component={Text}
        font='a'
        type={10}
      >
        { header }
      </StyledWrapper>

      {
        submenu &&
          <SubMenu
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
