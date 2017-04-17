import React, { PropTypes } from 'react';
import styles from '../shared/formfields.module.scss';
import classnames from 'classnames';

function TextField ( props ) {
  const {
    className,
    placeholder,
    label,
    input,
    meta
  } = props;

  return (
    <div className={ classnames(styles.textfield, className) }>
      {
        label &&
        <label
          className={ styles.label }
        >
          { label }
        </label>
      }

      <input
        className={ styles.input }
        type='text'
        placeholder={ placeholder }
        {...input}
      />
    </div>
  )
}

TextField.propTypes = {
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: React.PropTypes.string,
  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
}

TextField.defaultProps = {
  placeholder: 'Placeholder'
}

export default TextField;

