const smallRange = {
  lower: '0em',
  upper: '48em',
};

const mediumRange = {
  lower: '48.0625em',
  upper: '64em',
};

const largeRange = {
  lower: '64.0625em',
  upper: '80em',
};

const xLargeRange = {
  lower: '80.026em',
  upper: '90em',
};

const xxLargeRange = {
  lower: '90.0625em',
  upper: '999999999em',
};

const screen = 'only screen';

export default {
  smallUp: screen,
  smallOnly: `${screen} and (max-width: ${smallRange.upper})`,
  mediumUp: `${screen} and (min-width: ${mediumRange.lower})`,
  mediumOnly: `${screen} and (min-width: ${mediumRange.lower}) and (max-width: ${mediumRange.upper})`,
  largeUp: `${screen} and (min-width: ${largeRange.lower})`,
  largeOnly: `${screen} and (min-width: ${largeRange.lower}) and (max-width: ${largeRange.upper})`,
  xLargeUp: `${screen} and (min-width: ${xLargeRange.lower})`,
  xLargeOnly: `${screen} and (min-width: ${xLargeRange.lower}) and (max-width: ${xLargeRange.upper})`,
  xxLargeUp: `${screen} and (min-width: ${xxLargeRange.lower})`,
  xxLargeOnly: `${screen} and (min-width: ${xxLargeRange.lower}) and (max-width: ${xxLargeRange.upper})`,
};
