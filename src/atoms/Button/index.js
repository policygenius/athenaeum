import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Icon from 'atoms/Icon';
import styles from './buttons.module.scss';

function Button( props ) {
  const {
    className,
    children,
    type,
    variant,
    icon,
    disabled,
    shake,
  } = props;

  return (
    <button
      className={classnames(
        shake && styles['shaking'],
        styles[variant],
        className
      )}
      type={type}
      disabled={disabled}
      {...omit(props, [ 'className', 'children', 'variant', 'shake' ])}
    >
      {
        icon &&
          <Icon icon={icon} className={styles['icon']} />
      }
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
  variant: PropTypes.oneOf([
    'info', 'disabled', 'toggle', 'action', 'actionDisabled', 'lowlight', 'outline', 'button'
  ]),

  /**
   * Optional icon. Choices can be found here: [Icons](/#icon)
   */
  icon: PropTypes.string,

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
