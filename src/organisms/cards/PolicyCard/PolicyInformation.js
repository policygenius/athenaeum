import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import Hide from 'wrappers/Hide';
import Text from 'atoms/Text';
import styles from './policy_card.module.scss';

export const PolicyInformation = ({ financialStrength, customerService, totalCustomers }) =>
  <Hide hideOn='small medium' className={styles['policy-info']}>
    <Text
      type={7}
      color='neutral-3'
      semibold
    >
      <div className={styles['label']}>Financial Strength</div>
      <Text color='neutral-2' semibold>{financialStrength}</Text>
    </Text>
    <Text
      type={7}
      color='neutral-3'
      semibold
    >
      <div className={styles['label']}>Customer Service</div>
      <Text color='neutral-2' semibold>{customerService}</Text>
    </Text>
    <Text
      type={7}
      color='neutral-3'
      semibold
    >
      <div className={styles['label']}>Total Customers</div>
      <Text color='neutral-2' semibold>{accounting.formatNumber(totalCustomers)}</Text>
    </Text>
    <div className={styles['divider']} />
  </Hide>

;

PolicyInformation.propTypes = {
  totalCustomers: PropTypes.number,
  customerService: PropTypes.string,
  financialStrength: PropTypes.string,
};

export default PolicyInformation;
