const mobileRange = {
  lower: '0em',
  upper: '47.9375em',
};

const tabletRange = {
  lower: '48em',
  upper: '64em',
};

const desktopRange = {
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

const mobile = screen;
const mobileOnly = `${screen} and (max-width: ${mobileRange.upper})`;
const tablet = `${screen} and (min-width: ${tabletRange.lower})`;
const tabletOnly = `${screen} and (min-width: ${tabletRange.lower}) and (max-width: ${tabletRange.upper})`;
const desktop = `${screen} and (min-width: ${desktopRange.lower})`;

export default {
  mobile,
  mobileOnly,
  tablet,
  tabletOnly,
  desktop,

  // previous breakpoint names left for backwards compatability

  smallUp: mobile,
  smallOnly: mobileOnly,
  mediumUp: tablet,
  mediumOnly: tabletOnly,
  largeUp: desktop,
  largeOnly: `${screen} and (min-width: ${desktopRange.lower}) and (max-width: ${desktopRange.upper})`,
  xLargeUp: `${screen} and (min-width: ${xLargeRange.lower})`,
  xLargeOnly: `${screen} and (min-width: ${xLargeRange.lower}) and (max-width: ${xLargeRange.upper})`,
  xxLargeUp: `${screen} and (min-width: ${xxLargeRange.lower})`,
  xxLargeOnly: `${screen} and (min-width: ${xxLargeRange.lower}) and (max-width: ${xxLargeRange.upper})`,
};
