import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './checkbox_field.module.scss';

function CheckBoxField( props ) {
  const {
    label,
    input,
    fontStyle,
    onClick
  } = props;

  return (
    <label
      className={styles['checkbox']}
      htmlFor={`checkbox-${input.name}`}
    >
      <input
        type='checkbox'
        id={`checkbox-${input.name}`}
        onClick={onClick}
        className={styles['checkbox-input']}
        checked={input.value}
        {...input}
      />
      <span
        className={classnames(styles['checkbox-label'], styles[fontStyle])}
      >
        { label }
      </span>
    </label>
  );
}

CheckBoxField.propTypes = {
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
  onClick: PropTypes.func,
};

CheckBoxField.defaultProps = {
  fontStyle: 'light',
};

export default CheckBoxField;
