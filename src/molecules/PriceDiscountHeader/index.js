import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './price_discount_header.module.scss';

function PriceDiscountHeader(props) {
  const {
    amount,
    prevAmount,
    label,
    className
  } = props;

  return (
    <div className={classnames(styles['header'], className)}>
      <sup className={classnames(styles['sup'], styles['curr'])}>$</sup>
      <span className={classnames(styles['amount'])}>{amount}</span>

      {label && <small className={classnames(styles['sm'], styles['label'])}>{label}</small>}
      {prevAmount && <small className={classnames(styles['sm'], styles['prev-amount'])}>{`$${prevAmount}`}</small>}
    </div>
  );
}

PriceDiscountHeader.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * current amount
   */
  amount: PropTypes.number.isRequired,
  /**
   * string label to denote unit (i.e /mo, per month, yr)
   */
  label: PropTypes.string,
  /**
   *  previous amount. There are no checks to see that its lower than the current price.
   */
  prevAmount: PropTypes.number,

};

export default PriceDiscountHeader;
