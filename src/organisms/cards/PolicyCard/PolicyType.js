import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import styles from './policy_card.module.scss';

export const PolicyType = ({ policyType, policyTooltip }) =>
  <div className={styles['policy-type']}>
    <Hide hideOn='small'>
      <Text
        type={7}
        color='neutral-3'
        semibold
      >
        Policy Type
      </Text>
    </Hide>
    <Text
      color='neutral-2'
      type={5}
      semibold
      className={styles['policy-name']}
    >
      {policyType}
    </Text>
    <Text
      type={7}
      color='neutral-2'
      semibold
      className={styles['policy-tooltip']}
    >
      {policyTooltip}
    </Text>
    <div className={styles['divider']} />
  </div>
;

PolicyType.propTypes = {
  policyType: PropTypes.string,
  policyTooltip: PropTypes.node
};

export default PolicyType;
