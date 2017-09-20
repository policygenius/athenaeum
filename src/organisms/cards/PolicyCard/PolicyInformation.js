import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import Hide from 'wrappers/Hide';
import Text from 'atoms/Text';
import Tooltip from 'atoms/Tooltip';
import styles from './policy_card.module.scss';

export const PolicyInformation = ({ financialStrength, customerService, totalCustomers }) =>
  <Hide hideOn='small medium' className={styles['policy-info']}>
    <Tooltip
      text={
        <Text type={7} color='neutral-3' semibold>
          <div className={styles['policy-info-label']}>Financial Strength</div>
          <Text color='neutral-2' semibold>{financialStrength.value}</Text>
        </Text>
      }
      className={styles['policy-info-tooltip']}
    >
      { financialStrength.hoverMessage }
    </Tooltip>
    <Tooltip
      text={
        <Text type={7} color='neutral-3' semibold>
          <div className={styles['policy-info-label']}>Customer Service</div>
          <Text color='neutral-2' semibold>{customerService.value}</Text>
        </Text>
      }
      className={styles['policy-info-tooltip']}
    >
      { customerService.hoverMessage }
    </Tooltip>
    <Tooltip
      text={
        <Text type={7} color='neutral-3' semibold>
          <div className={styles['policy-info-label']}>Total Customers</div>
          <Text color='neutral-2' semibold>{accounting.formatNumber(totalCustomers.value)}</Text>
        </Text>
      }
      className={styles['policy-info-tooltip']}
    >
      { totalCustomers.hoverMessage }
    </Tooltip>
    <div className={styles['divider']} />
  </Hide>
;

PolicyInformation.propTypes = {
  totalCustomers: PropTypes.shape({
    value: PropTypes.number.isRequired,
    hoverMessage: PropTypes.node.isRequired
  }),
  customerService: PropTypes.shape({
    value: PropTypes.string.isRequired,
    hoverMessage: PropTypes.node.isRequired
  }),
  financialStrength: PropTypes.shape({
    value: PropTypes.string.isRequired,
    hoverMessage: PropTypes.node.isRequired
  }),
};

export default PolicyInformation;
