function buildSrc({ link, key }) {
  if (link) return link;

  return `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=initMap`;
}

export default function loadJS({ link, key }) {
  const src = buildSrc({ link, key });

  const ref = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');

  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
