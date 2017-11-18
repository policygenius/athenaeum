import React from 'react';
import PropTypes from 'prop-types';
import Hide from 'wrappers/Hide';
import Text from 'atoms/Text';
import Tooltip from 'atoms/Tooltip';
import formatValue from 'utils/formatValue';

import styles from './policy_card.module.scss';

export const PolicyInformation = ({ information }) =>
  <Hide hideOn='mobile tablet' className={styles['policy-info']}>
    {
      information.map((item, idx) =>
        <Tooltip
          text={
            <Text type={7} color='neutral-3' semibold>
              <div className={styles['policy-info-label']}>{item.label}</div>
              <Text type={7} color='neutral-2' semibold>{formatValue(item.value)}</Text>
            </Text>
          }
          hoverMessageClassName={styles['policy-type-hover-message']}
          className={styles['policy-info-tooltip']}
          key={`${item.label}-${idx}`}
        >
          { item.hoverMessage }
        </Tooltip>
      )
    }
  </Hide>
;

PolicyInformation.propTypes = {
  information: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    hoverMessage: PropTypes.node.isRequired
  })),
};

export default PolicyInformation;
