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
    htmlFor
  } = props;

  return (
    <div className={classnames(styles.textfield, className)}>
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
  input: PropTypes.object
};

TextField.defaultProps = {
  placeholder: 'Placeholder'
};

export default TextField;
