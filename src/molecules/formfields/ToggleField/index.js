import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Tooltip from 'atoms/Tooltip';
import Button from 'atoms/Button';

import styles from '../shared/formfields.module.scss';

function renderChoices(choices, input) {
  if (!choices) return null;

  return choices.map((choice, idx) => {
    // eslint-disable-next-line
    const variantName = input.value == choice.value ? 'toggle-active' : 'toggle';

    return (
      <Button
        variant={variantName}
        key={`button-toggle-btn-${idx}`}
        className={styles.button}
        onClick={e => input.onChange(e.target.value)}
        value={choice.value}
        {...omit(input, 'value')}
      >
        { choice.label }
      </Button>
    );
  });
}

function ToggleField( props ) {
  const {
    label,
    className,
    tooltipMessage,
    toggleChoices,
    input,
    meta,
  } = props;

  return (
    <div className={classnames(className, { [styles.focused]: meta && meta.active }, styles.togglefield)}>
      {
        tooltipMessage &&
        <div className={styles['tooltip-wrapper']}>
          <Tooltip>{ tooltipMessage }</Tooltip>
        </div>
      }

      { label && <div className={styles.header}>{label}</div> }

      <div className={styles['button-wrapper']}>
        { renderChoices(toggleChoices, input) }
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
  input: PropTypes.object.isRequired,
  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,
};

export default ToggleField;
