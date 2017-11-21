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
        variant='action'
        onClick={onDetails}
      >
        View Policy
      </Button>
      {
        onCompare &&
        <div>
          <Spacer spacer={2} />
          <Button
            onClick={onCompare}
          >
            Compare
          </Button>
        </div>
      }
    </div>
  );
}

ButtonGroup.propTypes = {
  onDetails: PropTypes.func.isRequired,
  onCompare: PropTypes.func,
  continueCTAText: PropTypes.string,
};

export default ButtonGroup;
