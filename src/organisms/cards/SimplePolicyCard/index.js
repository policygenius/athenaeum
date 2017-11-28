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
    onDetails,
    compareCheckbox,
    className
  } = props;

  return (
    <div>
      <div className={styles['mobile-card']}>
        <SimpleFeaturedPolicyCard
          premium={premium}
          carrierLogo={carrierLogo}
          onDetails={onDetails}
          onCompare={compareCheckbox.onCompare}
        />
      </div>
      <div className={classnames(styles['policy-card'], className)}>
        <div className={styles['body']}>
          <Compare {...compareCheckbox} />
          <div className={styles['divider']} />
          <CarrierLogo carrierLogo={carrierLogo} />
          <div className={styles['divider']} />
          <Premium premium={premium} />
          <div className={classnames(styles['divider'], styles['info-divider'])} />
          <PolicyActions
            onDetails={onDetails}
            onCompare={compareCheckbox.onCompare}
            premium={premium}
          />
        </div>
      </div>
    </div>
  );
}

SimplePolicyCard.propTypes = propTypes;

export default SimplePolicyCard;
