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
  <svg
    width='100%'
    viewBox={`${offset} 0 ${size} 15`}
    className={styles['svg-text']}
  >
    <text x='0' y='12'>{text}</text>
  </svg>

;

export const PolicyActions = (props) => {
  const {
    premium,
    discount,
    onContinue,
    onDetails,
    onCompare
  } = props;

  const formattedPremium = accounting.formatMoney(premium.price);

  return (
    <div className={styles['actions']}>
      { premium.price ?
        <div>
          <Text type={5} color='neutral-2' semibold>
            <Text type={3} semibold>{formattedPremium}</Text>
            { ' ' }
            {premium.format}
          </Text>
          {discount && discount}
        </div>
        :
        <Text type={7} color='neutral-2'>{premium.defaultText}</Text>
      }
      <Spacer spacer={3} />
      <Layout largeCols={[ 6 ]} mediumCols={[ 12 ]} smallCols={[ 12, 6, 6 ]} style={{ width: '100%' }}>
        <Button
          variant='action'
          slim
          onClick={onContinue}
          className={classnames(styles['continue'])}
        >
          <Hide hideOn='small medium xLarge xxLarge'>
            <ResponsiveText text='Continue' offset={-3} size={75} />
          </Hide>

          <Hide hideOn='large'>
            Continue
          </Hide>
        </Button>
        <Button slim onClick={onDetails}>
          <Hide hideOn='small medium xLarge xxLarge'>
            <ResponsiveText text='Details' offset={-10} size={75} />
          </Hide>
          <Hide hideOn='large'>
            Details
          </Hide>
        </Button>
        <Hide hideOn='medium large xLarge xxLarge'>
          <Button
            onClick={onCompare}
            slim
          >
            Compare
          </Button>
        </Hide>
      </Layout>
    </div>
  );
};

PolicyActions.propTypes = {
  premium: PropTypes.shape({
    price: PropTypes.number,
    format: PropTypes.string,
    defaultText: PropTypes.string,
  }),
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
