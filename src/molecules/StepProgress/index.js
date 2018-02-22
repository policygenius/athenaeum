import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';

import styles from './step-progress.module.scss';

function renderStep(step, idx) {
  const stepClassNames = [ styles['step'] ];

  if (step.current) stepClassNames.push(styles['step-current']);
  if (step.inactive) stepClassNames.push(styles['step-inactive']);
  if (step.complete) stepClassNames.push(styles['step-complete']);
  if (step.onClick) stepClassNames.push(styles['clickable']);

  return (
    <li key={`step-${idx}`} className={classnames(...stepClassNames)}>
      <a className={styles['wrapper']} href={step.link} onClick={step.onClick}>
        <span className={styles['icon-wrapper']}>
          <Icon icon={step.icon} className={styles['icon']} />
          { step.complete && <Icon icon='checkMark-1' className={styles['check']} /> }
        </span>
        <TextComponent tag='span' className={styles['label']}>{step.label}</TextComponent>
      </a>
    </li>
  );
}

function renderSteps(steps) {
  if (!steps) return null;

  return steps.map(renderStep);
}

function StepProgress( props ) {
  const {
    steps,
    className
  } = props;

  return (
    <ul className={classnames(styles['step-progress'], className)}>
      { renderSteps(steps) }
    </ul>
  );
}

StepProgress.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.bool,
      complete: PropTypes.bool,
      inactive: PropTypes.bool,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),

  /**
   * adds class name to class set
   */
  className: PropTypes.string
};

export default StepProgress;
