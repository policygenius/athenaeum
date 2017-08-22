const fromPairs = require('lodash/fromPairs');
const camelCase = require('lodash/camelCase');

if (process.env.NODE_ENV === 'test') {
  // Our tests do not run through webpack,
  // so the require.context is unavailable
  // and will throw an error.
  // We don't need the actual svgs for our tests,
  // so returning null allows us to avoid having to mock
  // every instance of the Icon component.
  module.exports = null;
} else {
  const svgContext = require.context('.', true, /((?!main-nav).)\.svg/);

  module.exports = fromPairs(svgContext.keys().map((svg) => {
    const svgName = svg.match(/([^/]+)\./)[1];

    return [ camelCase(svgName), svgContext(svg) ];
  }));
}
