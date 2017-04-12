import React, { PropTypes } from 'react';
import styles from './buttons.module.scss';
import classnames from 'classnames';

function Button ( props ) {
  const {
    type,
    children,
    onClick,
    shake,
    className
  } = props;

  return (
    <div
      className={ classnames(className, styles[type], { [styles.shaking]: shake }) }
      onClick={ onClick }
    >{children}</div>
  )
}

Button.propTypes = {
  /**
   * Possible button types are: `info, disabled, action, lowlight, actionDisabled, outline, or default (button)`
   *
   */
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  /**
   * Will append new classname to classSet
   */
  className: React.PropTypes.string,
  shake: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  onClick: () => alert('You clicked me!')
}

export default Button;
