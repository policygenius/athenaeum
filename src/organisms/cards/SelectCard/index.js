import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SelectField from 'molecules/formfields/SelectField';

function SelectCard( props ) {
  const {
    className,
    label,
    placeholder,
    selectOptions,
    onClick,
    input,
    defaultValue,
  } = props;

  return (
    <div className={className}
      <SelectField
        label={label}
        placeholder={placeholder}
        selectOptions={selectOptions}
        input={input}
        defaultValue={defaultValue}
        onAdditionalInfoClick={onClick}
      />
    </div>
  );
}

SelectCard.propTypes = {
  /**
   * optional additional class name for card
   */
  className: PropTypes.string,

  /**
   * text for footer link// Deprecated. No more footer link.
   */
  footerText: PropTypes.string.isRequired,

  /**
   * label for select field
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * url for footer link // Deprecated. No more footer link.
   */
  linkUrl: PropTypes.string,

  /**
   * onClick callback for footer link
   */
  onClick: PropTypes.func,

  /**
   * placeholder for select field
   */
  placeholder: PropTypes.string,

  /**
   * array of select options for select field
   */
  selectOptions: PropTypes.array,

  /**
   * Redux Form input object; pass any variables necessary for input change here
   */
  input: PropTypes.object,
  /**
   * Default / non-changeable value for the select field
   */
  defaultValue: PropTypes.string
};

export default SelectCard;
