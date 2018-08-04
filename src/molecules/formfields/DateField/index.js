import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';
import Text from 'atoms/Text';

import { renderTooltip } from 'utils/fieldUtils';

import styles from './date_field.module.scss';

class DateField extends React.Component {
  render() {
    const {
      className,
      children,
      input,
      label,
      meta,
      subLabel,
      fieldRef,
      tooltip,
    } = this.props;

    const wrapChild = (child) => {
      const classes = [
        styles['input'],
        meta && meta.active && styles['input-focused'],
      ];

      return <div className={classnames(...classes)}>{child}</div>;
    };

    const showErrorMessage = !meta.active && (meta.visited || meta.submitFailed);

    const classes = [
      styles['date-field'],
      meta && meta.active && styles['focused'],
      meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
      className
    ];

    const message = meta && showErrorMessage && (meta.error || meta.warning);

    return (
      <div ref={fieldRef && fieldRef}>
        <div
          className={classnames(...classes)}
          onBlur={(e) => {
            if (!e.relatedTarget) input.onBlur();
          }}
          onFocus={input && input.onFocus}
        >
          <div className={styles['label-wrapper']}>
            <div className={styles['label']}>
              <label htmlFor='date'>{label}</label>
              { tooltip && renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
            </div>
            {
              subLabel &&
                <Text
                  size={10}
                  font='b'
                >
                  {subLabel}
                </Text>
            }
          </div>
          <div className={styles['line-1']}>
            { React.Children.map(children, wrapChild) }
          </div>
        </div>

        <ErrorMessage
          condition={!!message}
          message={message}
        />
      </div>
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
