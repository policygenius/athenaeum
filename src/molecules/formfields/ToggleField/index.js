import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';

import Button from 'atoms/Button';
import Layout, { Col } from 'atoms/Layout';
import ErrorMessage from 'atoms/ErrorMessage';

import { renderTooltip } from 'utils/fieldUtils';

import styles from './toggle_field.module.scss';

export const toBoolean = (value) => {
  if (value === 'false') { return false; }
  if (value === 'true') { return true; }

  return value;
};

const renderChoices = (choices, input) => {
  if (!choices) return null;

  const renderChoice = (choice, idx) => {
    const variantName = () => toBoolean(input.value) === toBoolean(choice.value) ? 'toggle-selected' : 'toggle';  // eslint-disable-line

    return (
      <Button
        className={styles['button']}
        variant={variantName()}
        key={`toggle-${idx}`}
        onClick={() => input.onChange(toBoolean(choice.value))}
        value={choice.value}
        {...omit(input, 'value')}
        onBlur={() => input.onBlur(toBoolean(choice.value))}
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
    noBorder,
    nested,
    sideBySide,
    setScrollRef,
  } = props;

  const classes = [
    styles['toggle-field'],
    noBorder && styles['no-border'],
    !label && styles['no-label'],
    meta && meta.active && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  const message = meta && meta.touched && !meta.active && (meta.error || meta.warning);

  const buttonStyle = sideBySide ? styles['side-by-side'] : styles['button-wrapper'];

  return (
    <div className={styles.wrapper} ref={setScrollRef && setScrollRef(input.name)}>
      <div className={classnames(...classes)}>
        <Layout
          nested={nested}
        >
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
          <Col className={buttonStyle}>
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

ToggleField.defaultProps = {
  toggleChoices: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ],
  sideBySide: true
};

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
  /**
   * An array of objects with two key/value pairs: `label` (string value) and `value` (string, number or boolean). Set to `Yes` (true) and `No` (false) by default.
   */
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
   * The `tooltipMessage` can be anything that can be rendered:
   * `numbers`, `strings`, `elements` or an `array` (or fragment) containing these types.
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      className: PropTypes.string,
      styles: PropTypes.object
    })
  ]),

  /**
   * input object contains any props to be passed directly to the button: value, onChange, onBlur etc.
   */
  input: PropTypes.object.isRequired,

  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,

  /**
   * Removes border surrouding label and buttons
   */
  noBorder: PropTypes.bool,

  /**
   * When present, nested is a prop passed directly to the layout component wrapping the ToggleField to remove ~6px left/right margin.
  **/
  nested: PropTypes.bool,

  /** Keeps buttons side-by-side; is true by default
   *
  **/
  sideBySide: PropTypes.bool,
  values: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
      ])
    )
  ),
  children: PropTypes.arrayOf(
    PropTypes.node
  ),
  setScrollRef: PropTypes.func,
};

export default ToggleField;
