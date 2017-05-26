import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';
import Tooltip from 'atoms/Tooltip';

import styles from './data_row.module.scss';

const renderAmount = (amount, unit) => {
  if (!amount) return null;

  const formattedNumber = accounting.formatNumber(amount, { precision: 2 });
  const splitNumber = formattedNumber.toString().split('.');

  return (
    <div className={classnames(styles['value'])}>
      <sup>$</sup>
      <strong>{splitNumber[0]}</strong>
      <sup>.{splitNumber[1]}</sup>
      { unit && <strong>{unit}</strong> }
    </div>
  );
};

function DataRow(props) {
  const {
    className,
    variant,
    label,
    value,
    amount,
    unit,
    tooltip,
    indent,
    description,
  } = props;

  const classes = [
    styles['data-row'],
    variant && styles[variant],
    indent && styles['indent'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <div className={styles['row']}>
        <div className={classnames(styles['label'])}>
          <span className={styles['label-text']}>{ label }</span>
          { tooltip && <Tooltip className={styles['tip']}>{ tooltip }</Tooltip> }
        </div>
        { renderAmount(amount, unit) || <div className={classnames(styles['value'])}>{value}</div> }
      </div>
      { description && <p className={styles['description']}>{description}</p> }
    </div>
  );
}

DataRow.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Possible variants are: `large`, `sub` or (default)
   */
  variant: PropTypes.oneOf([
    'large',
    'sub',
  ]),
  /**
   * label/name for data
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  /**
   * description in small text under label.
   */
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * value can be anything preferably `string`, `number`, or `node`.
   */
  value: PropTypes.node,
  /**
   * a number that will be transformed into a currency amount to $00.00 format.
   * amount takes precedence over value, use one or the other.
   */
  amount: PropTypes.number,
  /**
   * per unit for Amount displayed, used in conjuction with amount.
   */
  unit: PropTypes.string,
  /**
   * optional helper text describing this data, adds a hover-able tooltip.
   */
  tooltip: PropTypes.string,
  /**
   * indents datarow items.
   */
  indent: PropTypes.bool,
};

export default DataRow;
