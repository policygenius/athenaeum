import accounting from 'accounting';

export default (value) => {
  const formattedValue = accounting.formatNumber(value);

  return formattedValue !== '0' ? formattedValue : value;
};
