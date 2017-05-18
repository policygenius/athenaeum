import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../shared/formfields.module.scss';

function CheckboxField( props ) {
  const {
    label,
    input,
    fontStyle,
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
      <span
        className={classnames(styles.checkboxLabel, styles[fontStyle])}
      >
        { label }
      </span>
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
  input: PropTypes.object,

  /**
   * determines font style of label (weight and size)
   */
  fontStyle: PropTypes.oneOf([
    'light',
    'semibold'
  ]),
};

CheckboxField.defaultProps = {
  fontStyle: 'light',
};

export default CheckboxField;
