import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';

import styles from 'molecules/formfields/shared/formfields.module.scss';
import { Partial, separatePartials, partialRenderer } from 'helpers/Partial';
import CreditCardPartials from './CreditCardPartials';

function CreditCardField(props) {
  const {
    className,
    label,
    focused,
    cardType,
    children
  } = props;

  const parts = separatePartials(children);
  const renderPartial = partialRenderer(CreditCardPartials);

  const baseClass = [
    styles['formfield'],
    styles['credit-card'],
    { [styles.focused]: focused },
    className
  ];

  return (
    <div className={classnames(...baseClass)}>
      <div className={classnames(styles['formfield-header'], styles['credit-card-header'])}>
        <label
          htmlFor='date'
          className={styles.label}
        >
          { label }
        </label>
        <Icon className={styles['credit-card-lock']} icon='lock' />
      </div>
      <div className={styles['credit-card-line1']}>
        {renderPartial('top', parts.Top)}
        <Icon className={styles['credit-card-logo']} icon={cardType} />
      </div>
      {renderPartial('bottom', parts.Bottom)}
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
   * Whether or not the credit card field is focused
   */
  focused: PropTypes.bool,
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

CreditCardField.Top = class Top extends Partial {};
CreditCardField.Bottom = class Bottom extends Partial {
  render() {
    return (
      <div className={styles['credit-card-line2']}>
        { React.Children.map(this.props.children,
          child => <div className={styles['credit-card-input']}>{ child }</div>
        )}
      </div>
    );
  }
};

export default CreditCardField;
