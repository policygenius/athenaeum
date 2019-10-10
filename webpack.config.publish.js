const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: ['./entry.js'],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        minimize: true,
        mangle: false,
        compress: {
          warnings: false
        },
        keep_classnames: true
      }
    })
  ]
});
