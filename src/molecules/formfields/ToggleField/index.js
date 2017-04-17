import React, { PropTypes } from 'react';
import styles from '../shared/formfields.module.scss';
import classnames from 'classnames';

function ToggleField ( props ){
  const {
    label,
    className,
    toggleChoices,
    onClick
  } = props;

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
                onClick={ onClick }
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
  className: PropTypes.string,

  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.string,

  /**
   * For use with the `button-toggle` type.
   *
   */
  toggleChoices: PropTypes.array.isRequired,
  onClick: PropTypes.func
}

export default ToggleField;

