import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';
import Text from 'atoms/Text';
import { renderTooltip } from 'utils/fieldUtils';

import styles from './radio_group.module.scss';

class RadioGroup extends React.Component {
  render() {
    const {
      children,
      className,
      label,
      subLabel,
      input,
      meta,
      tooltip,
      fieldRef,
    } = this.props;

    const showErrorMessage = !meta.active && (meta.visited || meta.submitFailed);
    const message = meta && showErrorMessage && (meta.error || meta.warning);

    const classes = [
      styles['radio-group'],
      meta && meta.active && styles['focused'],
      meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
      className,
    ];

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
              { /* eslint-disable jsx-a11y/label-has-for */ }
              <label htmlFor={input.name}>{label}</label>
              { /* eslint-enable jsx-a11y/label-has-for */ }
              { tooltip && renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
            </div>

            {
              subLabel && (
                <Text
                  size={10}
                  font='b'
                >
                  {subLabel}
                </Text>
              )
            }
          </div>
          {
            React.Children.map(children, (child) => (
              <div className={styles['field']}>
                { child }
              </div>
            ))
          }
        </div>

        <ErrorMessage
          condition={!!message}
          message={message}
        />
      </div>
    );
  }
}

RadioGroup.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Label for group
   */
  label: PropTypes.string,

  /**
   * label to appear directly under the label
   */
  subLabel: PropTypes.string,

  /**
   * Input props provided by ReduxForm
   */
  input: PropTypes.object,

  /**
   * meta props provided by ReduxForm
   */
  meta: PropTypes.object,

  /**
   * either a handler for clicking the tooltip, or text to go in the tooltip for the label
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),

  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,
};

export default RadioGroup;
