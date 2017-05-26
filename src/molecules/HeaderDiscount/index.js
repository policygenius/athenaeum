import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './header_discount.module.scss';

function HeaderDiscount(props) {
  const {
    amount,
    prevAmount,
    unit,
    className
  } = props;

  const classes = [
    styles['header-discount'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <p className={styles['amount']}>
        <sup className={styles['curr']}>$</sup>
        <span>{amount}</span>
        { unit && <small className={styles['unit']}>{unit}</small>}
        { prevAmount && <small className={styles['prev-amount']}>{`$${prevAmount}`}</small>}
      </p>
    </div>
  );
}

HeaderDiscount.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * current amount
   */
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * denote unit (i.e /mo, per month, yr)
   */
  unit: PropTypes.string,
  /**
   *  previous amount. There are no checks to see that its lower than the current price.
   */
  prevAmount: PropTypes.number,

};

export default HeaderDiscount;
