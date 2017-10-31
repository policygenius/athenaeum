import React from 'react';
import PropTypes from 'prop-types';

import StyledWrapper from 'atoms/StyledWrapper';
import Icon from 'atoms/Icon';

const getDimensions = ({ icon }) => {
  let height = '1.125rem';
  let width = height;

  if (icon === 'close') {
    height = '1rem';
    width = height;
  }

  return {
    width,
    height,
  };
};

const IconWrapper = props =>
  <StyledWrapper
    {...props}
  >
    <Icon
      icon={props.icon}
      {...getDimensions(props)}
    />
  </StyledWrapper>

;

IconWrapper.propTypes = {
  icon: PropTypes.string,
};

export default IconWrapper;
