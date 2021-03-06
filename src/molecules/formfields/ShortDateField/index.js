import PropTypes from 'prop-types';
import classnames from 'classnames';
import BaseDateField from '../util/BaseDateField';

import styles from '../util/BaseDateField/date_field.module.scss';

class ShortDateField extends BaseDateField {
  componentDidUpdate(_prevProps, prevState) {
    return this.changeShortDate(prevState);
  }

  get childClasses() {
    const { meta } = this.props;

    return classnames(...[
      styles['input'],
      styles['fields-2'],
      meta && meta.active && styles['input-focused'],
    ]);
  }

  render() {
    const {
      render,
    } = this.props;

    return (
      this.wrapper(render({
        monthField: this.monthField,
        dayField: this.dayField,
        yearField: this.yearField,
      }))
    );
  }
}

ShortDateField.propTypes = {

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
   * either a handler for clicking the tooltip, or text to go in the tooltip for the label
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Passes dayInputProps, monthInputProps, yearInputProps and fieldClass to provided function
   */
  render: PropTypes.func,
};

export default ShortDateField;
