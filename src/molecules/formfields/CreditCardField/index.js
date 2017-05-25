import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import ErrorMessage from 'atoms/ErrorMessage';

import styles from './credit_card_field.module.scss';

function CreditCardField(props) {
  const {
    className,
    label,
    cardType,
    creditCardNumber,
    expirationDate,
    securityCode,
    meta,
    input,
  } = props;

  const classes = [
    styles['credit-card'],
    meta && meta.active && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  const message = meta && meta.touched && (meta.error || meta.warning);

  return (
    <div>
      <div
        className={classnames(...classes)}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
      >
        <div className={classnames(styles['header'])}>
          <label htmlFor='date' className={styles['label']}>
            { label }
          </label>
          <Icon className={styles['icon-lock']} icon='lock' />
        </div>

        <div className={styles['line-1']}>
          { creditCardNumber }
          <Icon className={styles['icon-logo']} icon={cardType} />
        </div>

        <div className={styles['line-2']}>
          <div className={styles['col']}>{ expirationDate }</div>
          <div className={styles['col']}>{ securityCode }</div>
        </div>
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
}

CreditCardField.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Label.
   */
  label: PropTypes.string,

  /**
   * Credit card form field.
   */
  creditCardNumber: PropTypes.node,

  /**
   * Expiration Date form field.
   */
  expirationDate: PropTypes.node,

  /**
   * Security Code form field.
   */
  securityCode: PropTypes.node,

  /**
   *  Create Logo of credit card. Accepted Cards ['visa', 'americanExpress', 'masterCard', `discover`]
   */
  cardType: PropTypes.string,
  /**
   * Redux Form meta prop for touched, error, active
   */
  meta: PropTypes.object,
  /**
   * Redux form input object
   */
  input: PropTypes.object.isRequired,
};

CreditCardField.defaultProps = {
  // Place any default props here.
  label: 'Credit Card Information',
  cardType: 'visa',
};

export default CreditCardField;
