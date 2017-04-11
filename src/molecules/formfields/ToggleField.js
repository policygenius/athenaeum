import React from 'react';
import styles from './formfields.module.scss';
import classnames from 'classnames';

function ToggleField ( {
  label,
  className,
  toggleChoices
}){
  return (
    <div className={ classnames(className, styles.togglefield) }>
      <div className={ styles.header }>{ label }</div>
      <label>
        <div className={ styles['button-wrapper'] }>
          { toggleChoices.map( (choice, idx) => {
            return (
              <Button
                type='toggle'
                key={ 'button-toggle-btn-' + idx }
                className={ styles.button }
              >{ choice }</Button>
            )
          })
          }
        </div>
      </label>
    </div>
  )
}

ToggleField.propTypes = {
  /**
   * Will append new classname to classSet
   */
  className: React.PropTypes.string,
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: React.PropTypes.string,
  /**
   * For use with the `button-toggle` type.
   *
   */
  toggleChoices: React.PropTypes.array.isRequired
}

export default ToggleField;

