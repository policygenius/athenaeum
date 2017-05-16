const camelCase = require('lodash/camelCase');

function filesManifest(context) {
  if (!context) return null;

  const fileName = path => camelCase(path.match(/([^/]+)\./)[1]);
  const fileManifest = (res, key) => {
    const fileObj = { [fileName(key)]: context(key) };

    return Object.assign({}, res, fileObj);
  };

  return context.keys().reduce(fileManifest, {});
}

let svgContext;

// Skip context loading in tests. require.context is not available in jest.
if (module.hot) {
  svgContext = require.context('.', true, /\.svg/);
}

module.exports = filesManifest(svgContext);
