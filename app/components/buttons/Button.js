import React from 'react';
import styles from '../../assets/stylesheets/components/buttons.module.scss';

function Button ( { type, children } ) {
  return (
    <div className={ styles[type] }>{children}</div>
  )
}

export default Button;

