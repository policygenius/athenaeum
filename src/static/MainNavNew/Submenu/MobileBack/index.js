/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
// import {
  // Col,
  // Layout,
  // Icon,
  // Text,
  // StyledWrapper,
// } from 'athenaeum';

import Col from 'atoms/Layout/Col';
import Layout from 'atoms/Layout';
import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import StyledWrapper from 'atoms/StyledWrapper';

import styles from './mobile_back.module.scss';
import { mobileBackWrapper, mobileBack } from './styles';

const MobileBack = props =>
  <StyledWrapper
    component={Col}
    fullwidth
    css={mobileBackWrapper}
  >
    <StyledWrapper
      component={Layout}
      smallCols={[ 1, 11 ]}
      fullwidth
      css={mobileBack}
    >
      <div
        onClick={() => props.setMobileCollapsedMenu(null)}
        className={styles['mobile-back-click']}
      >
        <Icon
          icon='backRebrand'
          height='25px'
          width='20px'
          className={styles['mobile-back-icon']}
        />
      </div>
      <div
        onClick={() => props.setMobileCollapsedMenu(null)}
        className={styles['mobile-back-click']}
      >
        <Text
          type={10}
          font='a'
        >
          { props.text }
        </Text>
      </div>
    </StyledWrapper>
  </StyledWrapper>

;

MobileBack.propTypes = {
  setMobileCollapsedMenu: PropTypes.func,
  text: PropTypes.string,
};

export default MobileBack;
