import React from 'react';
import styles from './buttons.module.scss';

function Button ( { type, children } ) {
  return (
    <div className={ styles[type] }>{children}</div>
  )
}

Button.propTypes = {
  /**
   * Possible button types are: `info, disabled, or default (button)`
   *
   */
  type: React.PropTypes.string.isRequired
}

Button.defaultProps = {
  type: 'button'
}

export default Button;

