import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from 'molecules/formfields/shared/formfields.module.scss';

function DateField(props) {
  const {
    className,
    children,
    label,
    meta
  } = props;

  const baseClassName = classnames(
    styles['datefield'],
    { [styles.focused]: meta && meta.active },
    { [styles.hasError]: meta && meta.touched && meta.error && !meta.active },
    className
  );

  const childClassName = classnames(
    styles['datefield-input'],
    { [styles['datefield-input-focused']]: meta && meta.active }
  );

  return (
    <div>
      <div className={baseClassName}>
        <label htmlFor='date' className={styles.label}>{label}</label>
        <div className={styles['datefield-wrapper']}>
          { React.Children.map(children,
            child =>
              <div className={childClassName}>
                { child }
              </div>
          )}
        </div>
      </div>
      {meta && meta.touched && meta.error &&
        <div className={styles.error}>{ meta.error }</div>
      }
    </div>
  );
}

DateField.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Label.
   */
  label: PropTypes.string,
  /**
   * Meta object is passed from reduxForm
   */
  meta: PropTypes.object
};

export default DateField;
