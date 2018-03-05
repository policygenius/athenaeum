import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import Button from 'atoms/Button';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';
import Text from 'atoms/Text';
import CheckBoxField from 'molecules/formfields/CheckBoxField';

import styles from './featured_policy_card.module.scss';

function ButtonGroup(props) {
  const {
    onContinue,
    onDetails,
    continueCTAText,
    detailsCTAText,
    compareCheckbox,
  } = props;

  if (isEmpty(compareCheckbox)) {
    return (
      <div className={styles['button-group']}>
        <Button
          onClick={onContinue}
        >
          {continueCTAText}
        </Button>
      </div>
    );
  }

  const {
    compareSelected,
    onCompare,
    name,
  } = compareCheckbox;

  return (
    <div className={styles['button-group']}>
      <Button
        onClick={onContinue}
        outline={compareSelected}
      >
        {continueCTAText}
      </Button>

      <Spacer size={12} />
      {
        onDetails &&
          <LinkWrapper
            onClick={onDetails}
            className={styles['details-link']}
          >
            {detailsCTAText}
          </LinkWrapper>

      }

      <div
        id={`${name}-checkbox-wrapper`}
        className={styles['checkbox-wrapper']}
        onClick={onCompare}
      >
        <Text
          size={10}
          font='b'
          className={classnames(compareSelected && styles['checked'])}
        >
          Compare
        </Text>
        <Spacer spacer={1} />
        <div className={styles['checkbox-field']}>
          <CheckBoxField
            input={{
              value: compareSelected,
              name
            }}
          />
        </div>
      </div>
    </div>
  );
}

ButtonGroup.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onDetails: PropTypes.func,
  continueCTAText: PropTypes.string,
  detailsCTAText: PropTypes.string,
  compareCheckbox: PropTypes.shape({
    onCompare: PropTypes.func.isRequired,
    compareSelected: PropTypes.bool,
    name: PropTypes.string,
  }),
};

ButtonGroup.defaultProps = {
  continueCTAText: 'Continue',
  detailsCTAText: 'Details',
};

export default ButtonGroup;
