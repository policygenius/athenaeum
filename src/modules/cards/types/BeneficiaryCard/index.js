import React from 'react';
import PercentageCard from '../PercentageCard';
import styles from './beneficiary_card.module.scss';

function BeneficiaryCard ( { PercentageCardProps, children } ) {


  return (
    <div className={ styles.beneficiary }>
      <span className={ styles['icon-close'] }/>
      <PercentageCard { ...PercentageCardProps }/>
    </div>
  )
}

BeneficiaryCard.propTypes = {
  /**
   * PercentageCardProps can be found [here](/#!/PercentageCard).
   */
  PercentageCardProps: React.PropTypes.object
}

BeneficiaryCard.defaultProps = {
}

export default BeneficiaryCard;
