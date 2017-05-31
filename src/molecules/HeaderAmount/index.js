import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './header_amount.module.scss';

function HeaderAmount(props) {
  const {
    className,
    label,
    amount,
    unit,
  } = props;

  const classes = [
    styles['header-amount'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      {label && <p className={styles['label']}>{label}</p> }
      <p className={styles['amount']}>
        <sup className={styles['curr']}>$</sup>
        <span>{amount}</span>
        { unit && <small className={styles['unit']}>{unit}</small> }
      </p>
    </div>
  );
}


HeaderAmount.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   *  amount
   */
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  /**
   * string label to denote unit (i.e /mo, per month, yr)
   */
  label: PropTypes.string,
  /**
   * denote unit (i.e /mo, per month, yr)
   */
  unit: PropTypes.string,
};

HeaderAmount.defaultProps = {
  amount: 0,
};

export default HeaderAmount;
