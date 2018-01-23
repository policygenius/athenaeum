import React from 'react';
import classnames from 'classnames';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import reduce from 'lodash/reduce';

import FeaturedPolicyCard from 'organisms/cards/FeaturedPolicyCard';

import styles from './policy_card.module.scss';
import propTypes from './propTypes';
import Compare from './Compare';
import CarrierLogo from './CarrierLogo';
import PolicyType from './PolicyType';
import PolicyInformation from './PolicyInformation';
import PolicyActions from './PolicyActions';

const objectToArray = obj => reduce(obj, (res, value) => {
  res.push(value);

  return res;
}, []);

function PolicyCard(props) {
  const {
    carrierLogo,
    premium,
    discount,
    onContinue,
    onDetails,
    compareCheckbox,
    footer,
    className,
    information,
    mainInformationValue,
    mobileInformationValues,
    header
  } = props;

  const mainInformation = pick(information, mainInformationValue)[mainInformationValue];
  const mobileInformation = objectToArray(pick(information, mobileInformationValues));
  const secondaryInformation = objectToArray(omit(information, mainInformationValue));

  return (
    <div>
      <div className={styles['mobile-card']}>
        <FeaturedPolicyCard
          premium={premium}
          discount={discount}
          carrierLogo={carrierLogo}
          onContinue={onContinue}
          onDetails={onDetails}
          onCompare={compareCheckbox.onCompare}
          information={mobileInformation}
          header={header}
        />
      </div>

      <div className={classnames(styles['policy-card'], className)}>
        <div className={styles['body']}>
          <Compare
            {...compareCheckbox}
          />
          <div className={styles['divider']} />
          <CarrierLogo
            carrierLogo={carrierLogo}
          />
          <div className={styles['divider']} />
          <PolicyType
            {...mainInformation}
          />
          <div className={styles['divider']} />
          <PolicyInformation
            information={secondaryInformation}
          />
          <div className={classnames(styles['divider'], styles['info-divider'])} />
          <PolicyActions
            onContinue={onContinue}
            onDetails={onDetails}
            onCompare={compareCheckbox.onCompare}
            discount={discount}
            premium={premium}
          />
        </div>
        {
          !!footer.length &&
            <div className={styles['footer']}>
              {footer.map((node, idx) =>
                (<div className={styles['node']} key={`footer-${idx}`}>
                  {node}
                </div>)
              )}
            </div>
        }
      </div>
    </div>
  );
}

PolicyCard.propTypes = propTypes;

export default PolicyCard;
