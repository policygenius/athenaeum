import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';

import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';

import styles from './featured_policy_card.module.scss';
import ButtonGroup from './ButtonGroup';
import PolicyInformation from './PolicyInformation';

function FeaturedPolicyCard(props) {
  const {
    carrierLogo,
    className,
    continueCTAText,
    discount,
    header,
    information,
    onContinue,
    onDetails,
    onCompare,
    policyHat,
    premium,
  } = props;

  const classes = [
    styles['featured-policy-card'],
    className,
  ];

  const contentClasses = classnames(
    styles['content'],
    policyHat && styles['policy-hat'],
  );

  const premiumValues = accounting.toFixed(premium.price, 2).split('.');
  const dollars = premiumValues[0];
  const cents = premiumValues[1];

  return (
    <div className={classnames(...classes)}>
      <div className={contentClasses}>
        { header && header }
        <Spacer small />
        { premium.price ?
          <div className={styles['premium']}>
            <div className={styles['value']}>
              <Text
                size={6}
                font='a'
                className={styles['value-small']}
              >
                $
              </Text>
              <Text
                size={2}
                font='a'
                className={styles['value-dollars']}
              >
                {dollars}
              </Text>
              <Text
                size={6}
                font='a'
                className={styles['value-small']}
              >
                .{cents}
              </Text>
              <Text
                tag='span'
                type={11}
                font='a'
                spaced
                color='neutral-2'
                className={styles['value-format']}
              >
                {`/${premium.format.toUpperCase()}`}
              </Text>
            </div>

            <Spacer spacer={1} />

            {discount && discount}
          </div>
            :
          <Text type={7} color='neutral-2'className={styles['default-text']}>{premium.defaultText}</Text>
          }

        <Spacer spacer={6} />

        <div className={styles['carrier-logo']}>
          { carrierLogo }
        </div>

        <Spacer spacer={6} />

        { information && <PolicyInformation information={information} /> }

        <ButtonGroup
          onContinue={onContinue}
          onDetails={onDetails}
          onCompare={onCompare}
          continueCTAText={continueCTAText}
        />
      </div>
    </div>
  );
}


FeaturedPolicyCard.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Array of nodes to display in header
   */
  header: PropTypes.arrayOf(PropTypes.node),

  /**
   * Displays premium value
   *
   * `defaultText` replaces `price` is `price` is not available
   */
  premium: PropTypes.shape({
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    format: PropTypes.string,
    defaultText: PropTypes.string,
  }),

  /**
   * Displays discount message below premium
   */
  discount: PropTypes.node,

  /**
   * Image for carrier logo
   */
  carrierLogo: PropTypes.node,

  /**
   * Text displayed for the main action button
   */
  continueCTAText: PropTypes.string,

  /**
   * Function supplied to details link below CTA
   */
  onContinue: PropTypes.func.isRequired,

  /**
   * Function supplied to details link below CTA
   */
  onDetails: PropTypes.func,

  /**
   * Function supplied to compare CTA on mobile only
   */
  onCompare: PropTypes.func,

  /**
   * Supplies information about policy to card. Examples would include type, financial strength or total customers
   */
  information: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    hoverMessage: PropTypes.node.isRequired,
  })),
  /**
   * Setting this to true will add a 'hat' to the policy card
   */
  policyHat: PropTypes.bool,
};

FeaturedPolicyCard.defaultProps = {
  continueCTAText: 'Continue',
  detailsCTAText: 'Details & Review',
  policyHat: false
};

export default FeaturedPolicyCard;
