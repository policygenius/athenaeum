import React from 'react';
import styles from './formfields.module.scss';

function renderPlaceholder(placeholder) {
  return (
    <option
      selected disabled hidden
      value=''
      className={ styles['option'] }
    >{ placeholder }</option>
  )
}

function FormField ( {
  type,
  forProp,
  placeholder,
  label,
  children,
  selectOptions,
  toggleChoices } ) {

  switch ( type ) {
    case 'button-toggle':
      return (
        <div className={ styles[type] }>
          <div className={ styles.header }>{ label }</div>
          <label
            htmlFor={ forProp }
          >
            <div className={ styles['button-wrapper'] }>
              { toggleChoices.map( (choice, idx) => {
                return (
                  <Button
                    type='toggle'
                    key={ 'button-toggle-btn-' + idx }
                    className={ styles['button'] }
                  >{ choice }</Button>
                )
              })
              }
            </div>
          </label>
        </div>
      )

    case 'selectfield':
      return (
        <div className={ styles[type] }>
          <label
            htmlFor={ forProp }
            className={ styles.label }
          >{ label }</label>
          <div className={ styles.selectbox }>
            <select required
              id={ forProp }
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


    default:
      return (
        <div className={ styles[type] }>
          <label
            htmlFor={ forProp }
            className={ styles.label }
          >{ label }</label>
          <input
            id={ forProp }
            className={ styles.input }
            type='text'
            placeholder={ placeholder } />
        </div>
      )
  }
}

FormField.propTypes = {
  /**
   * Possible card types are: `1`
   *
   */
  type: React.PropTypes.string.isRequired,
  forProp: React.PropTypes.string,
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: React.PropTypes.string,
  /**
   * For use with the `button-toggle` type.
   *
   */
  toggleChoices: React.PropTypes.array,
  selectOptions: React.PropTypes.array
}

FormField.defaultProps = {
  type: 'textfield',
  forProp: 'first_name',
  placeholder: 'Placeholder',
  toggleChoices: ['Choice 1', 'Choice 2']
}

export default FormField;

