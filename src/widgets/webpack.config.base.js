/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

const baseConfig = require('../../webpack.config.base.js');

module.exports = (options) => baseConfig({
  entry: options.entry,
  output: options.output,
  resolve: options.resolve,
  context: path.resolve(__dirname, 'src'),
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  modulesName: options.modulesName,
});
