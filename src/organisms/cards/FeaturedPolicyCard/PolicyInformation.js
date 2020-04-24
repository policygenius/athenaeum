import React from 'react';
import PropTypes from 'prop-types';

import Col from 'atoms/Layout/Col';
import Layout from 'atoms/Layout';
import Spacer from 'atoms/Spacer';
import Text from 'atoms/Text';
import Tooltip from 'atoms/Tooltip';
import formatValue from 'utils/formatValue';

import styles from './featured_policy_card.module.scss';

const renderPolicyInformation = (info, idx) => (
  <div key={`policy-info-${idx}`}>
    <Layout
      smallCols={[ 6 ]}
      className={styles['policy-info-item']}
    >
      <Col
        fullwidth
        className={styles['policy-info-tooltip-group']}
      >
        <Tooltip
          className={styles['policy-info-tooltip-icon']}
          text={(
            <Text
              size={10}
              font='b'
              tag='span'
              className={styles['policy-info-tooltip-label']}
            >
              {info.label}
            </Text>
          )}
        >
          {info.hoverMessage}
        </Tooltip>
      </Col>
      <Text size={8} font='a' semibold>{formatValue(info.value)}</Text>
    </Layout>
    <Spacer spacer={2} />
  </div>
);

function PolicyInformation(props) {
  const {
    information
  } = props;

  return (
    <div className={styles['policy-info']}>
      {
        information.map(renderPolicyInformation)
      }
      <Spacer size={36} />
    </div>
  );
}

PolicyInformation.propTypes = {
  information: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    hoverMessage: PropTypes.node,
  })).isRequired,
};

export default PolicyInformation;
