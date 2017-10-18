import React from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
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
    input.value === radioValue && styleds['checked'],
    input.value && input.value !== radioValue && styles['not-selected'],
    className,
  ];

  return (
    <label
      className={classnames(...classes)}
      htmlFor={`radio-${camelCase(input.value)}`}
    >
      <input
        type='radio'
        name={input.name}
        id={`radio-${camelCase(input.value)}`}
        className={classnames(styles['radio'])}
        {...input}
      />
      <span className={styles['label']}>{ label }</span>
    </label>
  );
}


RadioField.propTypes = {
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
  input: PropTypes.object.isRequired
};

export default RadioField;
