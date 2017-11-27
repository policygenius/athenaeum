import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import Layout from 'atoms/Layout';
import Button from 'atoms/Button';
import Hide from 'wrappers/Hide';
import styles from './policy_card.module.scss';

const VIEW_POLICY_TEXT = 'View Policy';

export const PolicyActions = (props) => {
  const { onDetails } = props;

  return (
    <div className={styles['actions']}>
      <Layout mediumCols={[ 12 ]} style={{ width: '100%' }}>
        <Button
          slim
          variant='action'
          onClick={onDetails}
        >
          <Hide hideOn='small medium'>
            <Text offset={0} size={75}>
              {VIEW_POLICY_TEXT}
            </Text>
          </Hide>
          <Hide hideOn='large xLarge xxLarge'>
            <Text offset={0} size={75}>
              {VIEW_POLICY_TEXT}
            </Text>
          </Hide>
        </Button>
      </Layout>
    </div>
  );
};

PolicyActions.propTypes = {
  onDetails: PropTypes.func
};

export default PolicyActions;
