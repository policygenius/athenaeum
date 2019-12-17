import React from 'react';
import PropTypes from 'prop-types';

import Button from 'atoms/Button';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';

import styles from './featured_policy_card.module.scss';

function ButtonGroup(props) {
  const {
    onDetails,
    onContinue,
    onCompare,
    continueCTAText,
    detailsCTAText,
  } = props;

  return (
    <div className={styles['button-group']}>
      <Button
        onClick={onContinue}
      >
        {continueCTAText}
      </Button>
      {
        onDetails
          && (
            <div>
              <LinkWrapper
                onClick={onDetails}
                className={styles['details-link']}
              >
                {detailsCTAText}
              </LinkWrapper>
            </div>
          )

      }
      {
        onCompare
        && (
          <div>
            <Spacer spacer={2} />
            <Button
              outline
              onClick={onCompare}
            >
            Compare
            </Button>
          </div>
        )
      }
    </div>
  );
}

ButtonGroup.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onDetails: PropTypes.func,
  onCompare: PropTypes.func,
  continueCTAText: PropTypes.string,
  detailsCTAText: PropTypes.string,
};

ButtonGroup.defaultProps = {
  continueCTAText: 'Continue',
  detailsCTAText: 'Details',
};

export default ButtonGroup;
