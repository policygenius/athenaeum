import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import icons from 'assets/stylesheets/utilities/_icons.scss';
import styles from './step-progress.module.scss';

function StepProgress( props ) {
  const {
    data,
    className
  } = props;

  return (
    <ul className={classnames(styles.stepProgress, className)}>
      { data.map((step, index) =>
        <li
          key={index} className={classnames(styles.item, { [styles.current]: step.current,
            [styles.inactive]: step.inactive })}
        >
          <a className={styles.wrapper} href={step.link}>
            <i className={classnames(styles.icon, icons[step.icon])}>
              {step.complete &&
              <span className={classnames(icons['icon-check-dark'], styles['icon-check-dark'])}></span>
                }
            </i>
            <div className={styles.label}>{step.label}</div>
          </a>
        </li>
        )}
    </ul>
  );
}

StepProgress.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.bool,
      complete: PropTypes.bool,
      inactive: PropTypes.bool,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ),

  /**
   * adds class name to class set
   */
  className: PropTypes.string
};

export default StepProgress;

