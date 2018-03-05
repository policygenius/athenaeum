import React from 'react';
import PropTypes from 'prop-types';
import styles from './policy_card.module.scss';

export const CarrierLogo = ({ carrierLogo }) => {
  if (carrierLogo.type !== 'img') {
    return (
      <div className={styles['carrier-logo']}>
        {carrierLogo}
      </div>
    );
  }

  return (
    <div className={styles['carrier-logo']}>
      <div className={styles['carrier-img']}>
        {carrierLogo}
      </div>
    </div>
  );
};

CarrierLogo.propTypes = {
  carrierLogo: PropTypes.node
};

export default CarrierLogo;
