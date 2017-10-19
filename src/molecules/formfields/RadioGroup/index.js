import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import ErrorMessage from 'atoms/ErrorMessage';
import Text from 'atoms/Text';
import Tooltip from 'atoms/Tooltip';
import styles from './radio_group.module.scss';

function renderTooltip(tooltip, className) {
  if (typeof tooltip === 'string') {
    return (
      <Tooltip
        className={styles[className]}
        right
        text={
          <Icon
            icon='tooltip'
            className={styles['tooltip-icon']}
          />
        }
      >
        {tooltip}
      </Tooltip>
    );
  }

  return (
    <Tooltip
      className={styles[className]}
      onClick={tooltip}
      right
      text={
        <Icon
          icon='tooltip'
          className={styles['tooltip-icon']}
        />
      }
    />
  );
}

function RadioGroup(props) {
  const {
    children,
    className,
    label,
    subLabel,
    input,
    meta,
    tooltip,
  } = props;

  const showErrorMessage = (meta.visited && !meta.active) || meta.submitFailed;
  const message = meta && showErrorMessage && (meta.error || meta.warning);

  const classes = [
    styles['radio-group'],
    meta && meta.active && styles['focused'],
    meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  return (
    <div>
      <div
        className={classnames(...classes)}
        onBlur={(e) => {
          if (!e.relatedTarget) input.onBlur();
        }}
        onFocus={input && input.onFocus}
      >
        <div className={styles['label-wrapper']}>
          <div className={styles['label']}>
            <span>{label}</span>
            { tooltip && renderTooltip(tooltip, 'tooltip') }
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
        {
          React.Children.map(children, child =>
            <div className={styles['field']}>
              { child }
            </div>
          )
        }
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
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
};

export default RadioGroup;
