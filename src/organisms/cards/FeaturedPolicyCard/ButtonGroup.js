import React from 'react';
import PropTypes from 'prop-types';

import Col from 'atoms/Layout/Col';
import Button from 'atoms/Button';
import Layout from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';

import styles from './featured_policy_card.module.scss';

function ButtonGroup(props) {
  const {
    onDetails,
    onContinue,
    onCompare,
    continueCTAText,
  } = props;

  return (
    <div className={styles['button-group']}>
      <Button
        variant='action'
        onClick={onContinue}
      >
        {continueCTAText}
      </Button>

      <Spacer spacer={2} />

      {
        onDetails &&
          <LinkWrapper
            onClick={onDetails}
            className={styles['details-link']}
          >
            {'Details & Review'}
          </LinkWrapper>
      }

      {
        onDetails && onCompare &&
          <Layout
            smallCols={[ 6 ]}
            className={styles['secondary-actions-wrapper']}
            fullwidth
          >
            <Col
              className={styles['secondary-action']}
            >
              <Button
                onClick={onDetails}
              >
                Details
              </Button>
            </Col>
            <Col
              className={styles['secondary-action']}
            >
              <Button
                onClick={onCompare}
              >
                Compare
              </Button>
            </Col>
          </Layout>
      }
    </div>
  );
}

ButtonGroup.propTypes = {
  onDetails: PropTypes.func,
  onContinue: PropTypes.func.isRequired,
  onCompare: PropTypes.func,
  continueCTAText: PropTypes.string,
};

export default ButtonGroup;
