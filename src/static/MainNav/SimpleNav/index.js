import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  Text,
} from 'athenaeum';

import { simpleNav, secondaryTextWrapper, content } from './styles';

function SimpleNav(props) {
  const {
    regularPrimaryText,
    boldPrimaryText,
    secondaryText
  } = props;

  return (
    <StyledWrapper
      css={simpleNav}
    >
      <StyledWrapper
        css={content}
      >
        <Text
          type={10}
          font="b"
          variant="italics"
        >
          { regularPrimaryText } <Text tag="span" type={10} font="a">{ boldPrimaryText }</Text>
        </Text>
        <StyledWrapper
          css={secondaryTextWrapper}
          component={Text}
          type={10}
          font="a"
        >
          { secondaryText }
        </StyledWrapper>
      </StyledWrapper>
    </StyledWrapper>
  );
}

SimpleNav.propTypes = {
  regularPrimaryText: PropTypes.string,
  boldPrimaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default SimpleNav;
