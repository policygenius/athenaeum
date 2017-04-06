import React from 'react';
import styles from './beneficiary_card.module.scss';

function BeneficiaryCard ( { children } ) {

  return (
    <div className={ styles.beneficiary }>
      { children }
    </div>
  )
}

BeneficiaryCard.propTypes = {
  /**
   * Possible card types are: `add`
   *
   */
}

BeneficiaryCard.defaultProps = {
}

export default BeneficiaryCard;
