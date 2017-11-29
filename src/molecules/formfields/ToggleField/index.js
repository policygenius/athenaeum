import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Button from 'atoms/Button';
import Layout, { Col } from 'atoms/Layout';
import ErrorMessage from 'atoms/ErrorMessage';

import { renderTooltip } from 'utils/fieldUtils';

import styles from './toggle_field.module.scss';

const renderChoices = (choices, input) => {
  if (!choices) return null;

  const renderChoice = (choice, idx) => {
    const variantName = () => {
      if (input.value) {
        return input.value == choice.value ? 'toggle-selected' : 'toggle';  // eslint-disable-line
      }

      return 'toggle';
    };

    return (
      <Button
        className={styles['button']}
        variant={variantName()}
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
    className,
    children,
    label,
    tooltip,
    toggleChoices,
    input,
    meta,
  } = props;

  const classes = [
    styles['toggle-field'],
    meta && meta.active && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  const message = meta && meta.touched && !meta.active && (meta.error || meta.warning);

  return (
    <div>
      <div className={classnames(...classes)}>
        <Layout>
          { label &&
            <Col className={styles['header']}>
              { tooltip &&
                <div className={styles['tooltip-wrapper']}>
                  { renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
                </div>
              }
              { label }
            </Col>
          }
          { children && <Col className={styles['body']}>{children}</Col> }
          <Col className={styles['button-wrapper']}>
            { renderChoices(toggleChoices, input) }
          </Col>
        </Layout>
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
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
  tooltip: PropTypes.node,

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
