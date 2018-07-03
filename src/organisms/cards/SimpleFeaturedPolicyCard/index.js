import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';
import get from 'lodash/get';

import Text from 'atoms/Text';
import Layout from 'atoms/Layout';

import styles from './featured_policy_card.module.scss';
import ButtonGroup from './ButtonGroup';

function SimpleFeaturedPolicyCard(props) {
  const {
    className,
    premium,
    carrierLogo,
    onContinue,
    compareCheckbox,
    continueCTAText
  } = props;

  const selected = get(compareCheckbox, 'compareSelected', null);

  const classes = [
    styles['featured-policy-card'],
    className,
  ];

  const selectedStyles = [
    styles.content,
    selected && styles.selected,
  ];

  const formattedPremium = accounting.formatMoney(premium.price);
  const dollars = formattedPremium.slice(1).split('.')[0];
  const cents = formattedPremium.substring(formattedPremium.indexOf('.'));

  return (
    <div className={classnames(...classes)}>
      <Layout
        className={classnames(...selectedStyles)}
        smallCols={[ 6 ]}
        fullwidth
      >

        {
          carrierLogo.type !== 'img' ?
            <div className={styles['carrier-logo-wrapper']}>
              <div className={styles['carrier-info']}>
                { carrierLogo }
              </div>
            </div>
            :
            <div className={styles['carrier-logo-wrapper']}>
              <div className={styles['carrier-logo']}>
                { carrierLogo }
              </div>
            </div>
        }

        { premium.price ?
          <span className={styles['premium']}>
            <Text
              type={9}
              font='a'
              tag='span'
            >
              {formattedPremium[0]}
            </Text>
            <Text
              type={4}
              font='a'
              tag='span'
              className={styles.dollars}
            >
              {dollars}
            </Text>
            <Text
              type={11}
              font='a'
              tag='span'
            >
              {cents}
            </Text>
            <Text
              tag='span'
              type={11}
              font='a'
              spaced
              color='neutral-2'
              className={styles['premium-format']}
            >
              {`/${premium.format.toUpperCase()}`}
            </Text>

            {premium.tooltip}
          </span>
          :
          <Text
            type={7}
            font='a'
            className={styles['default-premium-text']}
          >
            {premium.defaultText}
          </Text>
        }
      </Layout>

      {
        onContinue &&
          <React.Fragment>
            <ButtonGroup
              onContinue={onContinue}
              compareCheckbox={compareCheckbox}
              continueCTAText={continueCTAText}
            />
          </React.Fragment>
      }
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
    defaultText: PropTypes.node,
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
   * Props for the Checkbox to compare
   *
   * NOTE: `name` must be unique
   */
  compareCheckbox: PropTypes.shape({
    onCompare: PropTypes.func.isRequired,
    compareSelected: PropTypes.bool,
    name: PropTypes.string,
  }),

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
