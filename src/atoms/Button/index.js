import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    text,
    unflex,
    outline,
    ...rest
  } = props;

  const classes = [
    styles['button'],
    styles[variant],
    outline && styles['outline'],
    className,
    unflex && styles['unflex'],
  ];

  return (
    <button className={classnames(...classes)} type={type} disabled={disabled} {...rest}>
      { icon && <Icon icon={icon} className={styles['icon']} /> }
      { children || text }
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
   * Possible button variants are: `info`, `disabled`, `outline` (deprecated)
   */
  variant: PropTypes.oneOf([
    'info', 'disabled', 'outline'
  ]),

  /**
   * Turns button into the outlined version
   */
  outline: PropTypes.bool,

  /**
   * Optional icon. Choices can be found here: [Icons](/#icon)
   */
  icon: PropTypes.string,

  /**
   * Adds `disabled` attribute to button element if true
   */
  disabled: PropTypes.bool,

  onClick: PropTypes.func,
  /**
   * Passes text into the button. Works the same way as passing children
   */
  text: PropTypes.string,
  /**
   * Will prevent the button from flexing to fill its parent container
   */
  unflex: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
