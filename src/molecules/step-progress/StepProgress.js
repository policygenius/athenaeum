import React, { PropTypes } from 'react';
import styles from './step-progress.module.scss';
import icons from 'assets/stylesheets/utilities/_icons.scss';
import classnames from 'classnames';

function StepProgress ( props ) {
  const {
    data,
    className
  } = props;

  return (
    <ul className={ classnames(styles.stepProgress, className) }>
      { data.map(step => {
        return (
          <li className={classnames(styles.item, { [styles.active]: step.active, [styles.inactive]: step.inactive })}>
            <a className={styles.wrapper} href={step.link}>
              <i className={classnames(styles.icon, icons[step.icon])}>
                {!step.active && !step.inactive &&
                  <span className={classnames(icons['icon-check-dark'], styles['icon-check-dark'])}></span>
                }
              </i>
              <div className={styles.label}>{step.label}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

StepProgress.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      inactive: PropTypes.bool,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  )
};

export default StepProgress;

