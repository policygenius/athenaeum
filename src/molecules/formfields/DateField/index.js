import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from 'molecules/formfields/shared/formfields.module.scss';

function DateField(props) {
  const {
    className,
    children,
    label,
    focused,
    error
  } = props;

  const baseClassName = classnames(
    styles['datefield'],
    { [styles.focused]: focused },
    { [styles.hasError]: !!error },
    className
  );

  const childClassName = classnames(
    styles['datefield-input'],
    { [styles['datefield-input-focused']]: focused }
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
      {error &&
        <div className={styles.error}>{ error }</div>
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
   * Whether or not the date field is focused
   */
  focused: PropTypes.bool,
  /**
   * Any errors for the date form
   */
  error: PropTypes.string
};

export default DateField;
