import React from 'react';
import styles from '../shared/formfields.module.scss';
import classnames from 'classnames';

function TextField ( props ) {
  const {
    className,
    placeholder,
    label
  } = props;

  return (
    <div className={ classnames(className, styles.textfield) }>
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
        placeholder={ placeholder } />
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
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
}

TextField.defaultProps = {
  placeholder: 'Placeholder'
}

export default TextField;

