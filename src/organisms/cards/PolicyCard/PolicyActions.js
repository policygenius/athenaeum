import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import classnames from 'classnames';
import Text from 'atoms/Text';
import Layout from 'atoms/Layout';
import Button from 'atoms/Button';
import Hide from 'wrappers/Hide';
import Spacer from 'atoms/Spacer';
import styles from './policy_card.module.scss';

const ResponsiveText = ({ text, offset, size }) =>
  <svg width='100%' height='100%' viewBox={`${offset} 0 ${size} 15`}>
    <text x='0' y='12'>{text}</text>
  </svg>

;

export const PolicyActions = (props) => {
  const {
    monthlyPremium,
    discount,
    onContinue,
    onDetails,
    onCompare
  } = props;

  const formattedPremium = accounting.formatMoney(monthlyPremium);

  return (
    <div className={styles['actions']}>
      <Text type={5} color='neutral-2' semibold>
        <Text type={3} semibold>{formattedPremium}</Text>
        { ' ' }
        mo
      </Text>
      {discount && discount}
      <Spacer spacer={3} />
      <Layout mediumCols={[ 6 ]} smallCols={[ 12, 6, 6 ]}>
        <Button
          variant='action'
          onClick={onContinue}
          className={classnames(styles['continue'])}
        >
          <Hide hideOn='small'>
            <ResponsiveText text='Continue' offset={-3} size={75} />
          </Hide>
          <Hide hideOn='medium large xLarge xxLarge'>
            Continue
          </Hide>
        </Button>
        <Button onClick={onDetails}>
          <Hide hideOn='small'>
            <ResponsiveText text='Details' offset={-10} size={70} />
          </Hide>
          <Hide hideOn='medium large xLarge xxLarge'>
            Details
          </Hide>
        </Button>
        <Hide hideOn='medium large xLarge xxLarge'>
          <Button
            onClick={onCompare}
          >
            Compare
          </Button>
        </Hide>
      </Layout>
    </div>
  );
};

PolicyActions.propTypes = {
  monthlyPremium: PropTypes.number,
  discount: PropTypes.node,
  onContinue: PropTypes.func,
  onDetails: PropTypes.func,
  onCompare: PropTypes.func,
};

ResponsiveText.propTypes = {
  text: PropTypes.string.isRequired,
  offset: PropTypes.number,
  size: PropTypes.number
};

export default PolicyActions;
