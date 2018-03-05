import React from 'react';
import classnames from 'classnames';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

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
    continueCTAText,
  } = props;

  const selected = get(compareCheckbox, 'compareSelected', null);

  const policyCardClasses = classnames(
    styles['policy-card'],
    selected && styles['selected'],
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
          continueCTAText={continueCTAText}
        />
      </div>
      <div className={policyCardClasses}>
        <div className={styles['body']}>
          <div className={styles['compare-logo-section']}>
            {
              !isEmpty(compareCheckbox) ?
              [
                <Compare {...compareCheckbox} />,
                <div className={styles['divider']} />
              ]
              :
              null
            }
            <CarrierLogo carrierLogo={carrierLogo} />
          </div>
          <div className={styles['divider']} />
          <Premium premium={premium} />
          {
            onContinue &&
              <PolicyActions
                onContinue={onContinue}
                selected={selected || anyCardSelected}
                continueCTAText={continueCTAText}
              />
          }
        </div>
      </div>
    </div>
  );
}

SimplePolicyCard.propTypes = propTypes;

export default SimplePolicyCard;
