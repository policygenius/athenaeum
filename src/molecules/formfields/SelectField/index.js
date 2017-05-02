import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from 'atoms/Tooltip';
import styles from 'molecules/formfields/shared/formfields.module.scss';
import renderPlaceholder from 'utils/Fields/renderPlaceholder';
import renderOptGroup from 'utils/Fields/renderOptGroup';


function renderOptions(opt, idx) {
  if (opt.group) return renderOptGroup(opt, idx);

  return (
    <option
      key={`selectfield-option-${idx}`}
      value={opt.value}
      className={styles['option']}
    >
      { opt.label }
    </option>
  );
}

function SelectField( props ) {
  const {
    className,
    placeholder,
    label,
    selectOptions,
    forProp,
    focused,
    type,
    input,
    tooltip,
    defaultValue
  } = props;

  return (
    <div className={classnames( styles[type], { [styles.focused]: focused }, className )}>
      {
        label &&
        <label
          className={classnames( styles.label, { [styles.focused]: focused } )}
          htmlFor={forProp}
        >
          { label }
          {
            tooltip &&
            <div className={styles['tooltip-wrapper']}>
              <Tooltip>
                { tooltip }
              </Tooltip>
            </div>
          }
        </label>
      }

      { defaultValue ?
        <div className={styles.select}>{defaultValue}</div>
        :
        <div className={styles.selectbox}>
          <select
            required
            className={styles.select}
            id={forProp}
            {...input}
          >
            { placeholder && renderPlaceholder( placeholder, styles.option ) }
            { selectOptions.map(renderOptions) }
          </select>
        </div>
      }
    </div>
  );
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
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * placeholder text for select box
   */
  placeholder: PropTypes.string,

  /**
   * array containing objects for select value
   */
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
  })),

  /**
   * defines type of select field
   */
  type: PropTypes.string,
  /**
   * contains anything you want to pass directly to input e.g. value, onChange, onBlur
   */
  input: PropTypes.object,
  /**
   * Content for tooltip
   */
  tooltip: PropTypes.node,
  /**
   * Default / non-changeable value
   */
  defaultValue: PropTypes.string
};

SelectField.defaultProps = {
  type: 'selectfield'
};

export default SelectField;
