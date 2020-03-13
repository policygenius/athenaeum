import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import omit from 'lodash/omit';
import classnames from 'classnames';

import styles from './radio_field.module.scss';

function RadioField(props) {
  const {
    label,
    className,
    input,
    radioValue
  } = props;

  const classes = [
    styles['radio-field'],
    className,
  ];

  const labelClasses = [
    styles['label'],
    input.value === radioValue && styles['checked'],
    input.value && input.value !== radioValue && styles['not-selected'],
  ];

  return (
    <label
      className={classnames(...classes)}
      htmlFor={`radio-${camelCase(radioValue)}`}
    >
      <input
        type='radio'
        name={input.name}
        id={`radio-${camelCase(radioValue)}`}
        className={classnames(styles['radio'])}
        onChange={() => input.onChange(radioValue)}
        {...omit(input, 'onChange')}
      />
      <span className={classnames(...labelClasses)}>{ label }</span>
    </label>
  );
}

RadioField.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * label for field directly next to the button
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,

  /**
   * The props under the input key are passed from `redux-form` and spread into `<input />`.
   */
  input: PropTypes.object.isRequired,

  /**
   * Value for radio field
   */
  radioValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
};

export default RadioField;
