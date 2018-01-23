import React from 'react';
import PropTypes from 'prop-types';

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
  (<div
    onClick={props.onClick}
    className={props.className}
  >
    <Icon
      icon={props.icon}
      {...getDimensions(props)}
    />
  </div>)

;

IconWrapper.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default IconWrapper;
