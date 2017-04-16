import React, { PropTypes } from 'react';
import styles from './buttons.module.scss';
import classnames from 'classnames';

function Button ( props ) {
  const {
    style,
    type,
    children,
    onClick,
    shake,
    className,
    disabled
  } = props;

  return (
    <button
      className={ classnames({ [styles.shaking]: shake }, styles[style], className) }
      onClick={ onClick }
      type={ type }
      disabled={ disabled }
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /**
   * Possible button styles are: `info`, `disabled`, `toggle`, `action`, `actionDisabled`, `lowlight`, `outline`, or `button` (default)
   */
  style: PropTypes.string,
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
}

Button.defaultProps = {
  style: 'button',
  type: 'button'
}

export default Button;
