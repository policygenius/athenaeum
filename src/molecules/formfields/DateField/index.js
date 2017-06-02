import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';
import styles from './date_field.module.scss';

function DateField(props) {
  const {
    className,
    children,
    input,
    label,
    meta,
  } = props;

  const wrapChild = (child) => {
    const classes = [
      styles['input'],
      meta && meta.active && styles['input-focused'],
    ];

    return <div className={classnames(...classes)}>{child}</div>;
  };

  const classes = [
    styles['date-field'],
    meta && meta.active && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className
  ];

  const message = meta && meta.touched && (meta.error || meta.warning);

  return (
    <div>
      <div
        className={classnames(...classes)}
        onBlur={input && input.onBlur}
        onFocus={input && input.onFocus}
      >
        <label htmlFor='date' className={styles['label']}>{label}</label>
        <div className={styles['line-1']}>
          { React.Children.map(children, wrapChild) }
        </div>
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
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
  meta: PropTypes.object,
  /**
   * Input object is passed from reduxForm
   */
  input: PropTypes.object
};

export default DateField;
