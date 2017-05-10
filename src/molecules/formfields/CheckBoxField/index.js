import React from 'react';
import PropTypes from 'prop-types';

import styles from '../shared/formfields.module.scss';

function CheckboxField( props ) {
  const {
    label,
    input
  } = props;

  return (
    <label
      className={styles.checkbox}
      htmlFor={`checkbox-${input.name}`}
    >
      <input
        type='checkbox'
        id={`checkbox-${input.name}`}
        checked={input.value}
        {...input}
      />
      <span className={styles.checkboxLabel}>{ label }</span>
    </label>
  );
}

CheckboxField.propTypes = {
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
  input: PropTypes.object
};

export default CheckboxField;
