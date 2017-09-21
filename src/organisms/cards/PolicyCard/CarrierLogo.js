import React from 'react';
import PropTypes from 'prop-types';
import styles from './policy_card.module.scss';

export const CarrierLogo = ({ carrierLogo }) =>
  <div className={styles['carrier-logo']}>
    {carrierLogo}
  </div>
;

CarrierLogo.propTypes = {
  carrierLogo: PropTypes.node
};

export default CarrierLogo;
