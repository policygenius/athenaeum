import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';

import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';

import styles from './featured_policy_card.module.scss';
import Header from './Header';
import ButtonGroup from './ButtonGroup';
import PolicyInformation from './PolicyInformation';

function FeaturedPolicyCard(props) {
  const {
    className,
    header,
    premium,
    discount,
    carrierLogo,
    onContinue,
    onDetails,
    information,
    onCompare,
    continueCTAText,
  } = props;

  const classes = [
    styles['featured-policy-card'],
    className,
  ];

  const formattedPremium = accounting.formatMoney(premium.price);

  return (
    <div className={classnames(...classes)}>
      { header && <Header header={header} /> }

      <div className={styles['content']}>
        { premium.price ?
          <div className={styles['premium']}>
            <Text
              type={2}
              color='neutral-1'
              semibold
            >
              {formattedPremium} <Text tag='span' type={7} color='neutral-2' semibold>{`/${premium.format.toUpperCase()}`}</Text>
            </Text>

            <Spacer spacer={1} />

            {discount && discount}
          </div>
          :
          <Text type={7} color='neutral-2'>{premium.defaultText}</Text>
        }

        <Spacer spacer={6} />

        <div className={styles['carrier-logo']}>
          { carrierLogo }
        </div>

        <Spacer spacer={6} />

        { information && <PolicyInformation information={information} /> }

        <ButtonGroup
          onDetails={onDetails}
          onContinue={onContinue}
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
   * Function supplied to main action button
   */
  onContinue: PropTypes.func.isRequired,

  /**
   * Text displayed for the main action button
   */
  continueCTAText: PropTypes.string,

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

FeaturedPolicyCard.defaultProps = {
  continueCTAText: 'Continue',
};

export default FeaturedPolicyCard;
