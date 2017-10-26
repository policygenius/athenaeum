import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import accounting from 'accounting';

import Button from 'atoms/Button';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Tooltip from 'atoms/Tooltip';

import styles from './featured_policy_card.module.scss';

const formatValue = (value) => {
  const formattedValue = accounting.formatNumber(value);

  return formattedValue !== '0' ? formattedValue : value;
};

const renderPolicyInformation = (info, idx) =>
  <div key={`policy-info-${idx}`}>
    <Layout
      smallCols={[ 6 ]}
      className={styles['policy-info-item']}
    >
      <Col
        fullwidth
        className={styles['policy-info-tooltip-group']}
      >
        <Text type={7}>{info.label}</Text>
        <Tooltip
          className={styles['policy-info-tooltip-icon']}
        >
          {info.hoverMessage}
        </Tooltip>
      </Col>
      <Text type={6} semibold>{formatValue(info.value)}</Text>
    </Layout>
    <Spacer spacer={2} />
  </div>

;

function FeaturedPolicyCard(props) {
  const {
    className,
    header,
    premium,
    discount,
    carrierLogo,
    onContinue,
    onDetails,
    information
  } = props;

  const classes = [
    styles['featured-policy-card'],
    className,
  ];

  const formattedPremium = accounting.formatMoney(premium.price);

  return (
    <div className={classnames(...classes)}>
      <div className={styles['header']}>
        {
          header.map((item, idx) =>
            <div
              key={`header-item-${idx}`}
              className={styles['header-item']}
            >
              {item}
            </div>
          )
        }
      </div>

      <div className={styles['content']}>
        { premium.price ?
          <div className={styles['premium']}>
            <Text
              type={2}
              color='neutral-1'
              semibold
            >
              {formattedPremium} <Text tag='span' type={7} color='neutral-4'>{`/${premium.format.toUpperCase()}`}</Text>
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

        {
          information &&
            <div className={styles['policy-info']}>
              {
                information.map(renderPolicyInformation)
              }
              <Spacer spacer={4} />
            </div>
        }

        <div className={styles['button-group']}>
          <Button
            variant='action'
            onClick={onContinue}
          >
            Continue
          </Button>

          <Spacer spacer={2} />

          <LinkWrapper
            onClick={onDetails}
            className={styles['details-link']}
          >
            {'Details & Review'}
          </LinkWrapper>
        </div>
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
  onContinue: PropTypes.func,

  /**
   * Function supplied to details link below CTA
   */
  onDetails: PropTypes.func,

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

export default FeaturedPolicyCard;
