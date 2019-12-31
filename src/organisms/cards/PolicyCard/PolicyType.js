import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import Tooltip from 'atoms/Tooltip';
import styles from './policy_card.module.scss';

export const PolicyType = ({
  label, value, tooltip, hoverMessage
}) => (
  <div
    className={styles['policy-type']}
  >
    <Tooltip
      text={(
        <div>
          <Hide hideOn='mobile'>
            <Text
              color='neutral-2'
              size={11}
              font='a'
              bold
              spaced
            >
              { label.toUpperCase() }
            </Text>
          </Hide>
          <Text
            type={7}
            font='a'
            semibold
            className={styles['policy-name']}
          >
            {value}
          </Text>
          <Text
            type={7}
            color='neutral-2'
            semibold
            className={styles['policy-tooltip']}
          >
            {tooltip}
          </Text>
        </div>
      )}
      hoverMessageClassName={styles['policy-type-hover-message']}
      className={styles['policy-type-tooltip']}
    >
      { hoverMessage }
    </Tooltip>
  </div>
);

PolicyType.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  tooltip: PropTypes.node,
  hoverMessage: PropTypes.node,
};

export default PolicyType;
