import React from 'react';
import styles from '../../assets/stylesheets/components/buttons.scss';

function simpleButton ( props ) {
  return (
    <div className={ styles.button }>{props.children}</div>
  )
}

export default simpleButton;
