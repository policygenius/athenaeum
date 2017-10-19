import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProgressBarStep from './ProgressBarStep';
import styles from './step_indicator.module.scss';

function StepIndicator(props) {
  const {
    className,
    steps,
    navigateToPath,
  } = props;

  const classes = [
    styles['step-indicator'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      {steps.map((step, idx) =>
        <ProgressBarStep
          key={idx}
          step={step}
          navigateToPath={navigateToPath}
        />
      )}
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
