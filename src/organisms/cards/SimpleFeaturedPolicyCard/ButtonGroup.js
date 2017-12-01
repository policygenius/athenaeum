import React from 'react';
import PropTypes from 'prop-types';

import Button from 'atoms/Button';
import Spacer from 'atoms/Spacer';

import styles from './featured_policy_card.module.scss';

function ButtonGroup(props) {
  const {
    onDetails,
    onCompare,
  } = props;

  return (
    <div className={styles['button-group']}>
      <Button
        onClick={onDetails}
      >
        View Policy
      </Button>

      <Spacer spacer={2} />

      <Button outline onClick={onCompare} >
        Compare
      </Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  onDetails: PropTypes.func,
  onCompare: PropTypes.func,
};

export default ButtonGroup;
