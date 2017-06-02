import React from 'react';
import PropTypes from 'prop-types';
import { Span } from 'atoms/Elementals';

const CurrencyAmount = (props) => {
  // eslint-disable-next-line
  const { tag, spacer, curr, amount, unit, ...rest } = props;
  const [ whole, decimals ] = amount.split('.');

  return (
    <Span {...rest}>
      <sup>{curr}</sup>
      <strong>{whole}</strong>
      { decimals && <sup>.{decimals}</sup> }
      { unit && <small>{ unit }</small> }
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
