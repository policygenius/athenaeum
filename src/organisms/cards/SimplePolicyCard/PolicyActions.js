import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'atoms/Layout';
import Button from 'atoms/Button';
import styles from './policy_card.module.scss';

const VIEW_POLICY_TEXT = 'View Policy';

export const PolicyActions = (props) => {
  const { onDetails } = props;

  return (
    <div className={styles['actions']}>
      <Layout smallCols={[ 12 ]} style={{ width: '100%' }}>
        <Button
          onClick={onDetails}
        >
          {VIEW_POLICY_TEXT}
        </Button>
      </Layout>
    </div>
  );
};

PolicyActions.propTypes = {
  onDetails: PropTypes.func
};

export default PolicyActions;
