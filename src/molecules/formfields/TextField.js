import React from 'react';
import styles from './formfields.module.scss';
import classnames from 'classnames';

function TextField ( {
  className,
  placeholder,
  label
}) {

  return (
    <div className={ classnames(className, styles.textfield) }>
      <label
        className={ styles.label }
      >{ label }</label>
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

