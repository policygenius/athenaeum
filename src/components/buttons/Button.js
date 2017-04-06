import React from 'react';
import styles from './buttons.module.scss';

function Button ( { type, children, onClick } ) {
  return (
    <div
      className={ styles[type] }
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
  onClick: React.PropTypes.func.isRequired
}

Button.defaultProps = {
  type: 'button',
  onClick: () => alert('You clicked me!')
}

export default Button;

