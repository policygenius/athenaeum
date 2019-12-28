import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import Text from 'atoms/Text';
import styles from './policy_card.module.scss';

export const Premium = ({ premium }) => {

  const formattedPremium = accounting.formatMoney(premium.price);

  return (
    <div className={styles['premium']}>
      {
        premium.price ? (
          <Text
            type={4}
            font='a'
            className={styles['premium-text']}
          >
            {formattedPremium}
            {' '}
            <Text tag='span' type={11} font='a' spaced color='neutral-2'>{`/${premium.format.toUpperCase()}`}</Text>
          </Text>
        )
          :
          <Text type={7} font='a'>{premium.defaultText}</Text>
      }

      {premium.tooltip}
    </div>
  );
};

Premium.propTypes = {
  premium: PropTypes.object
};

export default Premium;
