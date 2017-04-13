import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from 'molecules/formfields/shared/formfields.module.scss';
import renderPlaceholder from 'utils/Fields/renderPlaceholder';
import renderOptGroup from 'utils/Fields/renderOptGroup';

function SelectField ( props ) {
  const {
    className,
    placeholder,
    label,
    selectOptions,
    forProp,
    focused,
    onChange,
    type,
    value
  } = props;

  return (
    <div className={ classnames( styles[type], { [styles.focused]: focused }, className ) }>
      {
        label &&
        <label
          className={ classnames( styles.label, { [styles.focused]: focused } ) }
          htmlFor={ forProp }
        >
          { label }
        </label>
      }

      <div className={ styles.selectbox }>
        <select required
          className={ styles.select }
          onChange={ onChange }
          value={ value }
          id={ forProp }
        >
          { placeholder && renderPlaceholder( placeholder, styles.option ) }

          { selectOptions.map( (opt, idx) => {
              if (opt.group) {
                return renderOptGroup( opt )
              } else {
                return (<option
                  key={ 'selectfield-option-' + idx }
                  value={ opt.value }
                  className={ styles['option'] }
                >
                  { opt.value }
                </option>
                )
              }
            })
          }
        </select>
      </div>
    </div>
  )
}

SelectField.propTypes = {
  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,

  /**
   * adds focus state to select field
   */
  focused: PropTypes.bool,

  /**
   * adds for property to label with corresponding id to select field
   */
  forProp: PropTypes.string,

  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.string,

  /**
   * callback for handling user selection
   */
  onChange: PropTypes.func.isRequired,

  /**
   * placeholder text for select box
   */
  placeholder: PropTypes.string,

  /**
   * array containing objects for select value
   */
  selectOptions: PropTypes.array.isRequired,

  /**
   * defines type of select field
   */
  type: PropTypes.string,

  /**
   * sets the value for the select field based on change; this will override the placeholder
   */
  value: PropTypes.string
}

SelectField.defaultProps = {
  type: 'selectfield'
}

export default SelectField;

