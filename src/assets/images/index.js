const fromPairs = require('lodash/fromPairs');
const camelCase = require('lodash/camelCase');
const svgContext = require.context('.', true, /\.svg/);

module.exports = fromPairs(svgContext.keys().map((svg) => {
  const svgName = svg.match(/\b(.*?)\./)[1];

  return [ camelCase(svgName), svgContext(svg) ];
}));
