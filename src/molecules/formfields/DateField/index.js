import React from 'react';
import PropTypes from 'prop-types';

import BaseDateField from '../util/BaseDateField';

class DateField extends BaseDateField {
  render() {
    const { children } = this.props;

    return (
      this.wrapper(React.Children.map(children, this.wrapChild))
    );
  }
}

DateField.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Label.
   */
  label: PropTypes.string,

  /**
   * Label text placed underneath label.
   */
  subLabel: PropTypes.string,

  /**
   * Meta object is passed from reduxForm
   */
  meta: PropTypes.object,

  /**
   * Input object is passed from reduxForm
   */
  input: PropTypes.object,

  /**
   * Any children passed to DateField
   */
  children: PropTypes.node,

  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,

  /**
   * Adds a tooltip to the label. Provide string for text to be placed inside tooltip popup
   */
  tooltip: PropTypes.string,
};

export default DateField;
