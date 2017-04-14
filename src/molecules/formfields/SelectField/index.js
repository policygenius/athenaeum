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
    type,
    input,
    meta
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
        <select
          required
          className={ styles.select }
          id={ forProp }
          { ...input }
        >
          { placeholder && renderPlaceholder( placeholder, styles.option ) }

          { selectOptions.map( (opt, idx) => {
              if (opt.group) {
                return renderOptGroup( opt )
              } else {
                return (
                  <option
                    key={ 'selectfield-option-' + idx }
                    value={ opt.value }
                    className={ styles['option'] }
                  >
                    { opt.label }
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
   * placeholder text for select box
   */
  placeholder: PropTypes.string,

  /**
   * array containing objects for select value
   */
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired,

  /**
   * defines type of select field
   */
  type: PropTypes.string,
  /**
   * contains anything you want to pass directly to input e.g. value, onChange, onBlur
   */
  input: PropTypes.object,
  meta: PropTypes.object
}

SelectField.defaultProps = {
  type: 'selectfield'
}

export default SelectField;

