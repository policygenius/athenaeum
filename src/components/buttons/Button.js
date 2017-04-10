import React from 'react';
import styles from './buttons.module.scss';
import classnames from 'classnames';

function Button ( { type, children, onClick, className } ) {
  return (
    <div
      className={ classnames(className, styles[type]) }
      onClick={ onClick }
    >{children}</div>
  )
}

Button.propTypes = {
  /**
   * Possible button types are: `info, disabled, or default (button)`
   *
   */
  type: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  /**
   * Will append new classname to classSet
   */
  className: React.PropTypes.string
}

Button.defaultProps = {
  type: 'button',
  onClick: () => alert('You clicked me!')
}

export default Button;
