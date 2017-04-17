const fromPairs = require('lodash/fromPairs');
const assign = require('lodash/assign');

const mergeAll = (accum, current) => assign(accum, current);

const contexts = [
  require.context('./atoms', true, /.*\.js/),
  require.context('./molecules', true, /.*\.js/),
  require.context('./organisms', true, /.*\.js/),
  require.context('./templates', true, /.*\.js/)
];

module.exports = contexts.map(context => fromPairs(context.keys().map((component) => {
  const componentName = component.match(/.*\/(.*)\/index.js/)[1];

  return [ componentName, context(component).default ];
}))).reduce(mergeAll, {});
