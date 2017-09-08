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
    carrierLogo,
    monthlyPremium,
    discount,
    onContinue,
    onDetails,
    compareSelected,
    onCompare,
    footer,
    className
  } = props;

  return (
    <div className={classnames(styles['policy-card'], className)}>
      <div className={styles['body']}>
        <Compare
          onCompare={onCompare}
          compareSelected={compareSelected}
        />
        <CarrierLogo
          carrierLogo={carrierLogo}
        />
        <PolicyType
          policyType={policyType}
          policyTooltip={policyTooltip}
        />
        <PolicyInformation
          financialStrength={financialStrength}
          customerService={customerService}
          totalCustomers={totalCustomers}
        />
        <PolicyActions
          onContinue={onContinue}
          onDetails={onDetails}
          onCompare={onCompare}
          discount={discount}
          monthlyPremium={monthlyPremium}
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
