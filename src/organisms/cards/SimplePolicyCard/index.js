import React from 'react';
import classnames from 'classnames';

import SimpleFeaturedPolicyCard from 'organisms/cards/SimpleFeaturedPolicyCard';

import styles from './policy_card.module.scss';
import propTypes from './propTypes';
import Compare from './Compare';
import CarrierLogo from './CarrierLogo';
import Premium from './Premium';
import PolicyActions from './PolicyActions';

function SimplePolicyCard(props) {
  const {
    carrierLogo,
    premium,
    onContinue,
    compareCheckbox,
    className,
    anyCardSelected,
  } = props;

  const policyCardClasses = classnames(
    styles['policy-card'],
    compareCheckbox.compareSelected && styles['selected'],
    className
  );

  return (
    <div>
      <div className={styles['mobile-card']}>
        <SimpleFeaturedPolicyCard
          premium={premium}
          carrierLogo={carrierLogo}
          onContinue={onContinue}
          compareCheckbox={compareCheckbox}
        />
      </div>
      <div className={policyCardClasses}>
        <div className={styles['body']}>
          <Compare {...compareCheckbox} />
          <div className={styles['divider']} />
          <CarrierLogo carrierLogo={carrierLogo} />
          <div className={styles['divider']} />
          <Premium premium={premium} />
          <PolicyActions
            onContinue={onContinue}
            onCompare={compareCheckbox.onCompare}
            premium={premium}
            selected={compareCheckbox.compareSelected || anyCardSelected}
          />
        </div>
      </div>
    </div>
  );
}

SimplePolicyCard.propTypes = propTypes;

export default SimplePolicyCard;
