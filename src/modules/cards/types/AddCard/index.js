import React from 'react';
import styles from './add_card.module.scss';

function AddCard ( { children } ) {
  return (
    <div className={ styles.add }>{ children }</div>
  )
}

AddCard.propTypes = {
  /**
   * Possible card types are: `add`
   *
   */
}

AddCard.defaultProps = {
  children: '+ Add New Beneficiary'
}

export default AddCard;
