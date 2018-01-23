import React from 'react';
import PropTypes from 'prop-types';
import Hide from 'wrappers/Hide';
import Text from 'atoms/Text';
import Layout from 'atoms/Layout';
import Tooltip from 'atoms/Tooltip';
import formatValue from 'utils/formatValue';

import styles from './policy_card.module.scss';

export const PolicyInformation = ({ information }) =>
  (<Hide hideOn='mobile tablet' className={styles['policy-info']}>
    {
      information.map((item, idx) =>
        (<Tooltip
          text={
            <Text type={11} bold spaced color='neutral-2' font='a'>
              <Layout smallCols={[ 7, 5 ]} fullwidth>
                <div className={styles['policy-info-label']}>{item.label.toUpperCase()}</div>
                <Text type={8} font='a' semibold>{formatValue(item.value)}</Text>
              </Layout>
            </Text>
          }
          hoverMessageClassName={styles['policy-type-hover-message']}
          className={styles['policy-info-tooltip']}
          key={`${item.label}-${idx}`}
        >
          { item.hoverMessage }
        </Tooltip>)
      )
    }
  </Hide>)
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
