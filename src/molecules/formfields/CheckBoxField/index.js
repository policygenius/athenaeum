import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';

import styles from './checkbox_field.module.scss';

class CheckBoxField extends React.Component {
  render() {
    const {
      label,
      input,
      textColor,
      fieldRef,
    } = this.props;

    return (
      <label
        className={styles['checkbox']}
        htmlFor={`checkbox-${input.name}`}
        ref={fieldRef && fieldRef}
      >
        <input
          type='checkbox'
          id={`checkbox-${input.name}`}
          className={styles['checkbox-input']}
          checked={input.value}
          {...input}
        />
        <span className={styles['checkbox-label']}>
          <Text
            bold={input.checked}
            color={input.checked ? 'primary-3' : textColor || 'neutral-2'}
          >
            { label }
          </Text>
        </span>
      </label>
    );
  }
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
   * Makes field disabled
   */
  disabled: PropTypes.bool,

  /**
   * Applies color to label text; use Pg brand color names
   */
  textColor: PropTypes.string,

  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,
};

export default CheckBoxField;
