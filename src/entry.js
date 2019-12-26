/* eslint-disable import/no-unassigned-import */
require('./assets/stylesheets/base.scss');

const fromPairs = require('lodash/fromPairs');
const assign = require('lodash/assign');

const mergeAll = (accum, current) => assign(accum, current);

const contexts = [
  require.context('./atoms', true, /.*index\.js/),
  require.context('./molecules', true, /.*index\.js/),
  require.context('./organisms', true, /.*index\.js/),
  require.context('./templates', true, /.*index\.js/),
  require.context('./wrappers', true, /.*index\.js/)
];

module.exports = contexts.map((context) => fromPairs(context.keys().map((component) => {
  const componentName = component.match(/.*\/(.*)\/index.js/)[1];

  return [ componentName, context(component).default ];
}))).reduce(mergeAll, {});
