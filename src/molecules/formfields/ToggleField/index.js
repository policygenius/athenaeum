import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from 'atoms/Tooltip';
import Button from 'atoms/Button';
import styles from '../shared/formfields.module.scss';

function ToggleField( props ) {
  const {
    label,
    className,
    onClick,
    tooltipMessage,
    toggleChoices
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
            kind='toggle'
            key={`button-toggle-btn-${idx}`}
            className={styles.button}
            onClick={onClick}
          >{ choice }</Button>
          )
        }
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
  label: PropTypes.string,
  /**
   * For use with the `button-toggle` type.
   *
   */
  toggleChoices: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  /**
   * The `tooltopMessage` can be anything that can be rendered:
   * `numbers`, `strings`, `elements` or an `array` (or fragment) containing these types.
   */
  tooltipMessage: PropTypes.node
};

export default ToggleField;

