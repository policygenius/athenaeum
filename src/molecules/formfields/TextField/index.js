/* eslint-disable complexity */
import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import ErrorMessage from 'atoms/ErrorMessage';

import { renderTooltip } from 'utils/fieldUtils';

import styles from './text_field.module.scss';

class TextField extends React.Component {
  render() {
    const {
      className,
      htmlFor,
      input,
      label,
      mask,
      maskChar,
      meta,
      noBaseStyle,
      placeholder,
      secure,
      id,
      tooltip,
      inputTooltip,
      type,
      maskVal,
      prefix,
      postfix,
      activeValidation,
      subLabel,
      swiftype,
      fieldRef,
    } = this.props;

    const classes = [
      !noBaseStyle && styles['text-field'],
      meta && meta.active && !noBaseStyle && styles['focused'],
      meta && meta.touched && meta.error && !meta.active && styles['hasError'],
      className,
    ];

    const inputClasses = [
      styles['input-wrapper'],
      prefix && styles['prefix'],
      postfix && styles['postfix'],
      swiftype && styles['swiftype-prefix'],
    ];

    let message;

    if (activeValidation) {
      message = meta && (meta.dirty || meta.touched) && (meta.error || meta.warning);
    } else {
      message = meta && meta.touched && !meta.active && (meta.error || meta.warning);
    }

    return (
      <div ref={fieldRef && fieldRef}>
        <div className={classnames(...classes)}>
          { label && (
            <div className={classnames(styles['header'])}>
              <div className={styles['label-wrapper']}>
                {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                <label className={styles['label']} htmlFor={id || htmlFor}>{ label }</label>
                { secure && <Icon className={styles['icon-lock']} icon='lock' /> }
                { tooltip && renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
              </div>
              <Text size={10} font='b'>
                { subLabel }
              </Text>
            </div>
          )}
          <span
            data-prefix={prefix}
            data-postfix={postfix}
            className={classnames(...inputClasses)}
          >
            { swiftype && <Icon className={styles['icon-search']} icon='searchRebrand' /> }
            { mask
              ? (
                <InputMask
                  className={styles['input']}
                  type={type}
                  placeholder={placeholder}
                  mask={mask}
                  maskChar={maskChar}
                  id={id}
                  {...input}
                />
              )
              : (
                <input
                  className={classnames(
                    styles['input'],
                    swiftype && 'swiftype-search'
                  )}
                  type={type}
                  placeholder={placeholder}
                  id={id}
                  value={maskVal(input.value)}
                  {...omit(input, [ 'value' ])}
                />
              )}
            {inputTooltip && renderTooltip(inputTooltip, styles['input-tooltip'], styles['tooltip-icon'])}
          </span>
        </div>

        <ErrorMessage
          condition={!!message}
          message={message}
          type={meta && meta.warning ? 'warning' : 'error'}
        />
      </div>
    );
  }
}

TextField.propTypes = {

  /**
   * set to true to allow validation errors/warnings to occur `onChange`
   */
  activeValidation: PropTypes.bool,

  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * `for` prop on label.
   * Please use the `id` prop instead
   */
  htmlFor: PropTypes.string,

  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,

  /**
   * placeholder text for text field
   */
  placeholder: PropTypes.string,

  /**
   * object with all necessary props for input
   */
  input: PropTypes.object,

  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,

  /**
   * Passing `noBaseStyle=true` will omit the base class style
   * Fields may at times be wrapped up as a collection. In this case, the wrapper would control the styling for those fields as a group.
   */
  noBaseStyle: PropTypes.bool,

  /**
   * Mask the input
   */
  mask: PropTypes.string,

  /**
   * Specific the maskChar (must have `mask` set for this to be applied)
   */
  maskChar: PropTypes.string,

  /**
   * Function to mask the actual input value
   *
   * Provides for more specific customization over the `mask` prop
   */
  maskVal: PropTypes.func,

  /**
   * Adds a lock to the label.
   */
  secure: PropTypes.bool,

  /**
   * id added to the `input` node and used for the `for` HTML attribute on the associated `label`.
   * This prop is required to ensure the `label` and `input` follow best HTML5 accessibility practices as well as for testing purposes
   */
  id: PropTypes.string.isRequired,

  /**
   * either a handler for clicking the tooltip, or text to go in the tooltip for the label
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * either a handler for clicking the tooltip, or text to go in the tooltip for the input
   */
  inputTooltip: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),

  /**
   * HTML type for input node; when used with `mask` it always defaults to 'text'
   */
  type: PropTypes.oneOf([
    'text',
    'password',
    'tel',
  ]),

  /**
   * provides a prefix for the input
   */
  prefix: PropTypes.oneOf([
    '$',
  ]),

  /**
   * provides a postfix for the inpit
   */
  postfix: PropTypes.string,

  /**
   * Options text displayed directly underneath label
   */
  subLabel: PropTypes.string,

  /**
   * Enables swiftype search
   */
  swiftype: PropTypes.bool,

  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,

  errorMessage: PropTypes.bool
};

TextField.defaultProps = {
  errorMessage: false,
  maskVal: (val) => val,
  placeholder: 'Placeholder',
  type: 'text',
};

export default TextField;
