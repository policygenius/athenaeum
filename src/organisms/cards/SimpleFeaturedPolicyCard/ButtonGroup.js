import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import Button from 'atoms/Button';
import Text from 'atoms/Text';
import Icon from 'atoms/Icon';

import styles from './featured_policy_card.module.scss';

function ButtonGroup(props) {
  const {
    onContinue,
    continueCTAText,
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

  const classes = [
    styles['checkbox-wrapper'],
    compareSelected && styles['checkbox-selected'],
  ];

  const buttonGrpClasses = [
    styles['button-group'],
    compareSelected && styles['selected-button']
  ];

  const getIcon = () => compareSelected ? 'checkMark-1' : 'circlePlus';
  const getTextColor = () => compareSelected ? 'secondary-4' : 'neutral-2';

  return (
    <div className={classnames(...buttonGrpClasses)}>
      <div
        id={`${name}-checkbox-wrapper`}
        className={classnames(...classes)}
        onClick={onCompare}
      >
        <div className={styles.icon}>
          <Icon
            icon={getIcon()}
            height='26px'
            width='26px'
            renderSVGDOM
          />
        </div>
        <Text
          size={11}
          font='a'
          className={styles['compare-text']}
          color={getTextColor()}
        >
          COMPARE
        </Text>
      </div>
      <Button
        onClick={onContinue}
        className={styles['continue-cta']}
      >
        {continueCTAText}
      </Button>
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
