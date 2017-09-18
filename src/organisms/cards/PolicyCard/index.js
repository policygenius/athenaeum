import React from 'react';
import classnames from 'classnames';
import styles from './policy_card.module.scss';
import propTypes from './propTypes';

import Compare from './Compare';
import CarrierLogo from './CarrierLogo';
import PolicyType from './PolicyType';
import PolicyInformation from './PolicyInformation';
import PolicyActions from './PolicyActions';

function PolicyCard(props) {
  const {
    financialStrength,
    customerService,
    totalCustomers,
    policyType,
    policyTooltip,
    policyTypeHoverMessage,
    carrierLogo,
    premium,
    discount,
    onContinue,
    onDetails,
    compareCheckbox,
    footer,
    className,
  } = props;

  return (
    <div className={classnames(styles['policy-card'], className)}>
      <div className={styles['body']}>
        <Compare
          {...compareCheckbox}
        />
        <CarrierLogo
          carrierLogo={carrierLogo}
        />
        <PolicyType
          policyType={policyType}
          policyTooltip={policyTooltip}
          policyTypeHoverMessage={policyTypeHoverMessage}
        />
        <PolicyInformation
          financialStrength={financialStrength}
          customerService={customerService}
          totalCustomers={totalCustomers}
        />
        <PolicyActions
          onContinue={onContinue}
          onDetails={onDetails}
          onCompare={compareCheckbox.onCompare}
          discount={discount}
          premium={premium}
        />
      </div>
      {!!footer.length &&
        <div className={styles['footer']}>
          {footer.map((node, idx) =>
            <div className={styles['node']} key={`footer-${idx}`}>
              {node}
            </div>
          )}
        </div>
      }
    </div>
  );
}

PolicyCard.propTypes = propTypes;

export default PolicyCard;
