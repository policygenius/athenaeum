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

const renderPolicyInformation = (value, details) =>
  <Layout
    smallCols={[ 6 ]}
    className={styles['policy-info-item']}
  >
    <Col
      fullwidth
      className={styles['policy-info-tooltip-group']}
    >
      <Text type={7}>{value}</Text>
      <Tooltip
        className={styles['policy-info-tooltip-icon']}
      >
        {details.tooltipMessage}
      </Tooltip>
    </Col>
    <Text type={6} semibold>{formatValue(details.value)}</Text>
  </Layout>

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
    financialStrength,
    policyType,
    totalCustomers,
  } = props;

  const classes = [
    styles['featured-policy-card'],
    className,
  ];

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
              {`$${premium.price}`} <Text tag='span' type={7} color='neutral-4'>{`/${premium.format.toUpperCase()}`}</Text>
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

        <div className={styles['policy-info']}>
          {renderPolicyInformation('Policy Type', policyType)}
          <Spacer spacer={2} />
          {renderPolicyInformation('Financial Strength', financialStrength)}
          <Spacer spacer={2} />
          {renderPolicyInformation('Total Customers', totalCustomers)}
        </div>

        <Spacer spacer={6} />

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
          {'Deatils & Review'}
        </LinkWrapper>
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
   * Supplies information and tooltip message for financial strength section
   */
  financialStrength: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    tooltipMessage: PropTypes.node,
  }),

  /**
   * Supplies information and tooltip message for policy type section
   */
  policyType: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    tooltipMessage: PropTypes.node,
  }),

  /**
   * Supplies information and tooltip message for total customers section
   */
  totalCustomers: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    tooltipMessage: PropTypes.node,
  }),
};

FeaturedPolicyCard.defaultProps = {
  // Place any default props here.
};

export default FeaturedPolicyCard;
