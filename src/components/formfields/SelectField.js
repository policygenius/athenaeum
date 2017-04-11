import React from 'react';
import styles from './formfields.module.scss';
import classnames from 'classnames';

function renderPlaceholder(placeholder) {
  return (
    <option
      selected disabled hidden
      value=''
      className={ styles['option'] }
    >{ placeholder }</option>
  )
}

function SelectField ( {
  className,
  type,
  placeholder,
  label,
  selectOptions,
} ) {
  return (
    <div className={ classnames(className, styles.selectfield) }>
      <label
        className={ styles.label }
      >{ label }</label>
      <div className={ styles.selectbox }>
        <select required
          className={ styles.select }
        >
          { placeholder ? renderPlaceholder(placeholder) : '' }
          { selectOptions.map( (opt, idx) => {
            return  (
              <option
                key={ 'selectfield-option-' + idx }
                value={ opt[0] }
                className={ styles['option'] }
              >{ opt[1] }</option>
            )
          })
          }
        </select>
      </div>
    </div>
  )
}

SelectField.propTypes = {
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: React.PropTypes.string,
  selectOptions: React.PropTypes.array.isRequired,
  /**
   * Will append new classname to classSet
   */
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string
}

SelectField.defaultProps = {
  placeholder: 'Placeholder'
}

export default SelectField;

