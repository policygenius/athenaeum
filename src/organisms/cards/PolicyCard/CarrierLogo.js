import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import styles from './policy_card.module.scss';

export const CarrierLogo = ({ carrierLogo }) =>
  <div className={styles['carrier-logo']}>
    <Image
      cloudName='policygenius'
      style={{ width: '105px' }}
      {...carrierLogo}
    />
    <div className={styles['divider']} />
  </div>
;

CarrierLogo.propTypes = {
  carrierLogo: PropTypes.object
};

export default CarrierLogo;
