import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';

const CurrencyAmount = (props) => {
  // eslint-disable-next-line
  const { tag, spacer, curr, amount, unit, highlight, unitClassName, ...rest } = props;

  return (
    <Text tag='span' {...rest}>
      <sup>{curr}</sup>
      <strong>{amount}</strong>
      {' '}
      { unit && <Text tag='span' className={unitClassName} size={8} font='b' color={highlight ? 'secondary-2' : 'primary-3'}>{ unit }</Text> }
    </Text>
  );
};

CurrencyAmount.propTypes = {
  spacer: PropTypes.number,
  curr: PropTypes.string,
  amount: PropTypes.string,
  unit: PropTypes.string,
};

CurrencyAmount.defaultProps = {
  amount: '0.00',
  curr: '$',
};

export default CurrencyAmount;
