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
    href,
    linkAttrs,
    noHover,
    ...rest
  } = props;

  const classes = [
    styles['button'],
    variant && styles[variant],
    disabled && styles['disabled'],
    outline && styles['outline'],
    noHover && styles['no-hover'],
    className,
    unflex && styles['unflex'],
  ];

  if (href || linkAttrs) {
    return (
      <a
        className={classnames(...classes)}
        disabled={disabled}
        href={href}
        {...linkAttrs}
        {...rest}
      >
        { icon && <Icon icon={icon} className={styles['icon']} /> }
        { children || text }
      </a>
    );
  }

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
   * Possible button variants are: `info`, `disabled`, `outline` (deprecated).
   * Toggle buttons are either `toggle` or `toggle-selected`
   */
  variant: PropTypes.oneOf([
    'info', 'toggle', 'toggle-selected', 'disabled'
  ]),

  /**
   * If Button is passed an `href`, outputs as an `a` tag
   */
  href: PropTypes.string,

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

  /**
   * Passes any link attributes onto the a tag.
   */
  linkAttrs: PropTypes.object,

  /**
   * Removes hover state for Button on tablet and up
   */
  noHover: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
