import React from 'react';
import PropTypes from 'prop-types';
import { Span } from 'atoms/Elementals';
import Text from 'atoms/Text';

const CurrencyAmount = (props) => {
  // eslint-disable-next-line
  const { tag, spacer, curr, amount, unit, ...rest } = props;

  return (
    <Span {...rest}>
      <sup>{curr}</sup>
      <strong>{amount}</strong>
      { unit && <Text tag='span' weight='bold'>{ unit }</Text> }
    </Span>
  );
};

CurrencyAmount.propTypes = {
  spacer: PropTypes.number,
  curr: PropTypes.string,
  amount: PropTypes.string,
  unit: PropTypes.string,
};

CurrencyAmount.defaultProps = {
  curr: '$',
  amount: '0.00'
};

export default CurrencyAmount;
