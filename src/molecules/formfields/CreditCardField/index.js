import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';

import formStyles from 'molecules/formfields/shared/formfields.module.scss';
import creditCardStyles from './credit_card_field.module.scss';

const styles = Object.assign({}, formStyles, creditCardStyles);

function CreditCardField(props) {
  const {
    className,
    label,
    input,
    meta,
    cardType,
  } = props;

  const baseClass = [
    styles['formfield'],
    styles['credit-card'],
    { [styles.focused]: meta && meta.active },
    className
  ];

  return (
    <div className={classnames(...baseClass)}>

      <div className={classnames(styles['formfield-header'], styles['credit-card-header'])}>
        <label htmlFor='date' className={styles['label']}>{label}</label>
        <Icon className={styles['credit-card-lock']} icon='lock' />
      </div>

      <div className={styles['credit-card-line1']}>
        <input
          className={classnames(styles['input'], styles['credit-card-number'])}
          type='text'
          placeholder='Credit Card Number'
        />
        <Icon className={styles['credit-card-logo']} icon={cardType} />
      </div>

      <div className={styles['credit-card-line2']}>
        <input
          className={classnames(styles['input'], styles['credit-card-exp'])}
          type='text'
          placeholder='Expiration Date'
          pattern='[0-9]{13,16}'
        />

        <input
          className={classnames(styles['input'], styles['credit-card-sec'])}
          type='text'
          maxLength={4}
          placeholder='3/4 Digit Security Code'
        />
      </div>

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
   * input object contains any props to be passed directly: value.
   */
  input: PropTypes.object,
  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,
  /**
   *  Create Logo of credit card. Accepted Cards ['visa', 'americanExpress', 'masterCard', `discover`]
   */
  cardType: PropTypes.string,
};

CreditCardField.defaultProps = {
  // Place any default props here.
  label: 'Credit Card Information',
  cardType: 'visa',
};

export default CreditCardField;
