import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from 'atoms/Tooltip';
import Button from 'atoms/Button';
import omit from 'lodash/omit';

import styles from '../shared/formfields.module.scss';

function ToggleField( props ) {
  const {
    label,
    className,
    tooltipMessage,
    toggleChoices,
    input
  } = props;

  return (
    <div className={classnames(className, styles.togglefield)}>
      {
        tooltipMessage &&
        <div className={styles['tooltip-wrapper']}>
          <Tooltip>
            { tooltipMessage }
          </Tooltip>
        </div>
      }

      {
        label &&
        <div className={styles.header}>
          { label }
        </div>
      }

      <div className={styles['button-wrapper']}>
        { toggleChoices.map( (choice, idx) =>
          <Button
            variant={input.value.toString() === choice.value.toString() ? 'toggle-active' : 'toggle'}
            key={`button-toggle-btn-${idx}`}
            className={styles.button}
            onClick={e => input.onChange(e.target.value)}
            value={choice.value}
            {...omit(input, 'value')}
          >
            { choice.label }
          </Button>
        )}
      </div>
    </div>
  );
}

ToggleField.propTypes = {
  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,

  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  toggleChoices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    })
  ),
  /**
   * The `tooltopMessage` can be anything that can be rendered:
   * `numbers`, `strings`, `elements` or an `array` (or fragment) containing these types.
   */
  tooltipMessage: PropTypes.node,
  /**
   * input object contains any props to be passed directly to the button: value, onChange, onBlur etc.
   */
  input: PropTypes.object.isRequired
};

export default ToggleField;
