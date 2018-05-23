export default (userAgent) => {
  const iPhone = /iPhone/i;
  const iPod = /iPod/i;
  const iPad = /iPad/i;
  const windows = /Windows Phone|IEMobile|WPDesktop/i;

  const isiPhone = iPhone.test(userAgent) && !iPad.test(userAgent) && !windows.test(userAgent);

  return iPad.test(userAgent) || iPod.test(userAgent) || isiPhone;
};
