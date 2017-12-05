import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';

import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';

import styles from './featured_policy_card.module.scss';
import ButtonGroup from './ButtonGroup';

function SimpleFeaturedPolicyCard(props) {
  const {
    className,
    premium,
    carrierLogo,
    onContinue,
    onCompare,
  } = props;

  const classes = [
    styles['featured-policy-card'],
    className,
  ];

  const formattedPremium = accounting.formatMoney(premium.price);

  return (
    <div className={classnames(...classes)}>
      <div className={styles['content']}>
        { premium.price ?
          <div className={styles['premium']}>
            <Text
              type={3}
              font='a'
            >
              {formattedPremium} <Text tag='span' type={11} font='a' spaced color='neutral-2'>{`/${premium.format.toUpperCase()}`}</Text>
            </Text>
          </div>
          :
          <Text type={7} font='a'>{premium.defaultText}</Text>
        }

        <Spacer size={24} />

        <div className={styles['carrier-logo']}>
          { carrierLogo }
        </div>

        <Spacer size={36} />

        <ButtonGroup
          onContinue={onContinue}
          onCompare={onCompare}
        />
      </div>
    </div>
  );
}


SimpleFeaturedPolicyCard.propTypes = {
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
   * Function supplied to continue CTA button
   */
  onContinue: PropTypes.func,

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
};

SimpleFeaturedPolicyCard.defaultProps = {
  continueCTAText: 'Continue',
};

export default SimpleFeaturedPolicyCard;
