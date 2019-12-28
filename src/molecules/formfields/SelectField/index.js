import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import ErrorMessage from 'atoms/ErrorMessage';

import { renderSelectOptions, renderPlaceholder, renderTooltip } from 'utils/fieldUtils';
import styles from './select_field.module.scss';

const renderAdditionalInfo = (func) => {
  if (!func) return null;

  return (
    <div className={styles['tooltip-wrapper']}>
      <Icon
        icon='tooltip'
        height='18px'
        width='18px'
        inline='right'
        onClick={func}
      />
    </div>
  );
};

class SelectField extends React.Component {
  getClasses = () => {
    const {
      className,
      meta,
      variant,
      noBaseStyle
    } = this.props;

    return [
      !noBaseStyle && styles['select-field'],
      variant && styles[variant],
      meta && meta.active && styles['focused'],
      meta && meta.touched && meta.error && !meta.active && styles['hasError'],
      className,
    ];
  };

  render() {
    const {
      defaultValue,
      forProp,
      input,
      label,
      meta,
      onAdditionalInfoClick,
      placeholder,
      selectOptions,
      tooltip,
      required,
      subLabel,
      fieldRef,
      id,
    } = this.props;

    const classes = this.getClasses();

    const message = meta && meta.touched && !meta.active && (meta.error || meta.warning);

    const requiredAttr = () => required ? { required } : {};

    return (
      <div ref={fieldRef && fieldRef}>
        <div className={classnames(...classes)}>
          { label && (
            /* eslint-disable-next-line jsx-a11y/label-has-for */
            <label className={styles['label']} htmlFor={id || forProp}>
              { label }
              { renderAdditionalInfo(onAdditionalInfoClick) }
              {
                tooltip && (
                  <div className={styles['tooltip-wrapper']}>
                    { renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
                  </div>
                )}
              {
                subLabel && (
                  <Text size={10} font='b'>
                    { subLabel }
                  </Text>
                )}
            </label>
          )}

          { defaultValue ?
            <div className={styles['select']}>{defaultValue}</div>
            : (
              <div className={styles['select-wrapper']}>
                <select
                  className={styles['select']}
                  id={id || forProp}
                  {...requiredAttr()}
                  {...(omit(input, 'onClick'))}
                >
                  { placeholder && renderPlaceholder(placeholder) }
                  { renderSelectOptions(selectOptions) }
                </select>
              </div>
            )}
        </div>

        <ErrorMessage
          condition={!!message}
          message={message}
        />
      </div>
    );
  }
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
   * Removes base field style, including border, from SelectField. Best for use in a group of fields.
   */
  noBaseStyle: PropTypes.bool,

  /**
   * To add an (i) icon to the label, pass in a function
   * (called when icon is clicked)
   */
  onAdditionalInfoClick: PropTypes.func,

  /**
   * placeholder text for select box
   */
  placeholder: PropTypes.string,

  /**
   * array containing objects for select value
   */
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
  })),

  /**
   * Optional text displayed directly under the label
   */
  subLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * defines type of select field
   */
  variant: PropTypes.oneOf([
    'card',
  ]),

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
  defaultValue: PropTypes.string,

  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,

  /**
   * Make this field required. Defaults to required
   */
  required: PropTypes.bool,

  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,

  /**
   * id added to the `input` node and used for the `for` HTML attribute on the associated `label`.
   * This prop is required to ensure the `label` and `input` follow best HTML5 accessibility practices as well as for testing purposes
   */
  id: PropTypes.string.isRequired,

  errorMessage: PropTypes.bool
};

SelectField.defaultProps = {
  errorMessage: false,
  required: true
};

export default SelectField;
