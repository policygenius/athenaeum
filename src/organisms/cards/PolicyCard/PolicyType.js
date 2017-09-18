import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import Tooltip from 'atoms/Tooltip';
import styles from './policy_card.module.scss';

export const PolicyType = ({ policyType, policyTooltip, policyTypeHoverMessage }) =>
  <div
    className={styles['policy-type']}
  >
    <Tooltip
      text={
        <div>
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
        </div>
      }
      hoverMessageClassName={styles['policy-type-tooltip']}
    >
      { policyTypeHoverMessage }
    </Tooltip>
    <div className={styles['divider']} />
  </div>
;

PolicyType.propTypes = {
  policyType: PropTypes.string,
  policyTooltip: PropTypes.node,
  policyTypeHoverMessage: PropTypes.node,
};

export default PolicyType;
