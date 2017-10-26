import React from 'react';
import PropTypes from 'prop-types';
// import {
  // Text,
  // LinkWrapper,
  // StyledWrapper,
// } from 'athenaeum';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import StyledWrapper from 'atoms/StyledWrapper';

import styles from '../menu.module.scss';
import { primaryHeader } from '../PrimaryMenuHeader/styles';

function MenuLink(props) {
  const {
    header,
    href,
  } = props;

  return (
    <LinkWrapper
      href={href}
      className={styles['menu-link']}
    >
      <StyledWrapper
        css={primaryHeader(props)}
        component={Text}
        font='a'
        type={10}
      >
        { header }
      </StyledWrapper>
    </LinkWrapper>
  );
}

MenuLink.propTypes = {
  header: PropTypes.string,
  href: PropTypes.string,
};

export default MenuLink;
