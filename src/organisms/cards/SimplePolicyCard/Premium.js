import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import Text from 'atoms/Text';
import styles from './policy_card.module.scss';

export const Premium = ({ premium }) => {

  const formattedPremium = accounting.formatMoney(premium.price);

  return premium.price ?
    <div className={styles['premium']}>
      <Text
        type={3}
        color='neutral-1'
        semibold
        className={styles['premium-text']}
      >
        {formattedPremium} <Text tag='span' type={7} color='neutral-2' semibold>{`/${premium.format.toUpperCase()}`}</Text>
      </Text>
    </div>
    :
    <Text type={7} color='neutral-2'>{premium.defaultText}</Text>
    ;
};

Premium.propTypes = {
  premium: PropTypes.object
};

export default Premium;
