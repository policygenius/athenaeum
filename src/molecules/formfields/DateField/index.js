import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';
import Text from 'atoms/Text';
import styles from './date_field.module.scss';

function DateField(props) {
  const {
    className,
    children,
    input,
    label,
    meta,
    subLabel,
  } = props;

  const wrapChild = (child) => {
    const classes = [
      styles['input'],
      meta && meta.active && styles['input-focused'],
    ];

    return <div className={classnames(...classes)}>{child}</div>;
  };

  const showErrorMessage = (meta.visited && !meta.active) || meta.submitFailed;

  const classes = [
    styles['date-field'],
    meta && meta.active && styles['focused'],
    meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
    className
  ];

  const message = meta && showErrorMessage && (meta.error || meta.warning);

  return (
    <div>
      <div
        className={classnames(...classes)}
        onBlur={(e) => {
          if (!e.relatedTarget) input.onBlur();
        }}
        onFocus={input && input.onFocus}
      >
        <div className={styles['label']}>
          <label htmlFor='date'>{label}</label>
          {
            subLabel &&
              <Text
                size={10}
                font='b'
              >
                {subLabel}
              </Text>
          }
        </div>
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
   * Label text placed underneath label.
   */
  subLabel: PropTypes.string,
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
