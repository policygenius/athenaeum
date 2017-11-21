import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classnames from 'classnames';
import Text from 'atoms/Text';
import ProgressBarStep from './ProgressBarStep';
import styles from './step_indicator.module.scss';

function StepIndicator(props) {
  const {
    className,
    steps,
    navigateToPath
  } = props;

  const activeStep = steps.find(step => step.currentStepActive) || steps[0];

  return (
    <div className={classnames(className)}>
      <Text tag='div' type={10} color='neutral-2' font='a' className={styles['active-step']}>
        {get(activeStep, 'text', '')}
      </Text>
      <div className={styles['step-indicator']}>
        {steps.map((step, idx) =>
          <ProgressBarStep
            key={idx}
            step={step}
            navigateToPath={navigateToPath}
          />
        )}
      </div>
    </div>
  );
}

StepIndicator.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * An array of the steps to display
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      route: PropTypes.string,
      nextStepAccessible: PropTypes.bool,
      currentStepActive: PropTypes.bool,
      clickable: PropTypes.bool,
    })
  ).isRequired,
  /**
   * Click handler for steps; expects to be called with path name
   */
  navigateToPath: PropTypes.func.isRequired
};

export default StepIndicator;
