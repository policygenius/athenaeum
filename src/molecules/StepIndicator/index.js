import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProgressBarStep from './ProgressBarStep';
import styles from './step_indicator.module.scss';

function StepIndicator(props) {
  const {
    className,
    clickable,
    navigateToPath,
    steps,
  } = props;

  return (
    <div className={classnames(className)}>
      <div className={styles['step-indicator']}>
        {steps.map((step, idx) =>
          <ProgressBarStep
            key={idx}
            step={step}
            navigateToPath={navigateToPath}
            clickable={clickable}
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
      route: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
      nextStepAccessible: PropTypes.bool,
      currentStepActive: PropTypes.bool,
      clickable: PropTypes.bool,
    })
  ).isRequired,
  /**
   * Click handler for steps; expects to be called with path name
   */
  navigateToPath: PropTypes.func,
  /**
   * Bool will determine whether any steps are clickable. Set to `false` for non-functional, presentation-only progress bars
   */
  clickable: PropTypes.bool
};

StepIndicator.defaultProps = {
  clickable: true
};

export default StepIndicator;
