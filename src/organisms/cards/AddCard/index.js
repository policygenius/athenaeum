import React from 'react';
import styles from './add_card.module.scss';

function AddCard ( { children } ) {
  return (
    <div className={ styles.add }>{ children }</div>
  )
}

export default AddCard;
