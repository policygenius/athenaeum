import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../shared/formfields.module.scss';

function TextField( props ) {
  const {
    className,
    placeholder,
    label,
    input,
    htmlFor,
    meta,
  } = props;

  return (
    <div className={classnames(styles.textfield, { [styles.focused]: meta && meta.active }, className)}>
      {
        label &&
        <label
          className={styles.label}
          htmlFor={htmlFor}
        >
          { label }
        </label>
      }

      <input
        className={styles.input}
        type='text'
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
}

TextField.propTypes = {
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * `for` prop on label
   */
  htmlFor: PropTypes.string,

  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,

  /**
   * placeholder text for text field
   */
  placeholder: PropTypes.string,

  /**
   * object with all necessary props for input
   */
  input: PropTypes.object,
  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,
};

TextField.defaultProps = {
  placeholder: 'Placeholder'
};

export default TextField;
