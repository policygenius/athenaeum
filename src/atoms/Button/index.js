import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './buttons.module.scss';

function Button( props ) {
  const {
    className,
    children,
    type,
    variant,
    disabled,
    onClick,
    shake,
  } = props;

  return (
    <button
      className={classnames({ [styles.shaking]: shake }, styles[variant], className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,
  /**
   * Possible `type` attributes are: `submit`, `reset`, `button`, or `menu`
   */
  type: PropTypes.string,
  /**
   * Possible button variants are: `info`, `disabled`, `toggle`, `action`, `actionDisabled`, `lowlight`, `outline`, or `button` (default)
   */
  variant: PropTypes.string,
  /**
   * Adds `disabled` attribute to button element if true
   */
  disabled: PropTypes.bool,
  /**
   * Triggers shake animation if true
   */
  shake: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  variant: 'button',
};

export default Button;
