import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './buttons.module.scss';

function Button( props ) {
  const {
    kind,
    type,
    children,
    onClick,
    shake,
    className,
    disabled
  } = props;

  return (
    <button
      className={classnames({ [styles.shaking]: shake }, styles[kind], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /**
   * Possible button kinds are: `info`, `disabled`, `toggle`, `action`, `actionDisabled`, `lowlight`, `outline`, or `button` (default)
   */
  kind: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,
  /**
   * Triggers shake animation if true
   */
  shake: PropTypes.bool,
  /**
   * Possible `type` attributes are: `submit`, `reset`, `button`, or `menu`
   */
  type: PropTypes.string,
  /**
   * Adds `disabled` attribute to button element if true
   */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  kind: 'button',
  type: 'button'
};

export default Button;
