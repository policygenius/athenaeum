import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';

import Tooltip from 'atoms/Tooltip';
import CurrencyAmount from 'molecules/LockUps/CurrencyAmount';

import styles from './data_row.module.scss';

const renderAmount = (amount, unit, highlight) => {
  if (!amount) return null;

  const formattedNumber = accounting.formatNumber(amount, { precision: 2 });

  return (
    <CurrencyAmount
      highlight={highlight}
      className={styles['value']}
      amount={formattedNumber.toString()} unit={unit}
    />
  );
};

function DataRow(props) {
  const {
    className,
    variant,
    highlight,
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
    highlight && styles['highlight'],
    variant && styles[variant],
    indent && styles['indent'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <div className={styles['row']}>
        <div className={classnames(styles['label'])}>
          <div className={variant !== 'large' && styles['label-text']}>{ label }</div>
          { tooltip && <Tooltip className={styles['tip']}>{ tooltip }</Tooltip> }
        </div>
        { renderAmount(amount, unit, highlight) || <div className={classnames(styles['value'])}>{value}</div> }
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
   * When passed `highlight`, the datarow wraps its value
   * with a highlight class & accordant styles
   */
  highlight: PropTypes.bool,
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
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * per unit for Amount displayed, used in conjuction with amount.
   */
  unit: PropTypes.string,
  /**
   * optional helper text describing this data, adds a hover-able tooltip.
   */
  tooltip: PropTypes.string,
  /**
   * indents datarow items. // Deprecated. Now instead of indenting datarow
   * items, prefer to pass in 'subitem' prop
   */
  indent: PropTypes.bool,
  /**
   * Mark row as supplementary information (ie. Jewelry line under Valuables header)
   */
  subitem: PropTypes.bool,
};

export default DataRow;
