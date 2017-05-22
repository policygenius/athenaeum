import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Tooltip from 'atoms/Tooltip';
import Button from 'atoms/Button';
import Layout from 'atoms/Layout';

import styles from '../shared/formfields.module.scss';

const renderChoices = (choices, input) => {
  if (!choices) return null;

  const renderChoice = (choice, idx) => {
    const variantName = input.value === choice.value ? 'toggle-active' : 'toggle';

    return (
      <Button
        className={styles['button']}
        variant={variantName}
        key={`toggle-${idx}`}
        onClick={e => input.onChange(e.target.value)}
        value={choice.value}
        {...omit(input, 'value')}
      >
        { choice.label }
      </Button>
    );
  };

  return choices.map(renderChoice);
};

function ToggleField( props ) {
  const {
    children,
    label,
    className,
    tooltipMessage,
    toggleChoices,
    input,
    meta,
  } = props;

  const classes = [
    styles['togglefield'],
    { [styles['focused']]: meta && meta.active },
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <Layout>
        { label &&
          <div className={styles['header']}>
            { label }
            { tooltipMessage &&
              <div className={styles['tooltip-wrapper']}>
                <Tooltip right>{ tooltipMessage }</Tooltip>
              </div>
            }
          </div>
        }
        { children && <div className={styles['body']}>{children}</div> }
        <div className={styles['button-wrapper']}>
          { renderChoices(toggleChoices, input) }
        </div>
      </Layout>
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
