/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: [ './main_nav_entry.js' ],
  output: {
    path: path.resolve(__dirname, './main_nav/build/'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './main_nav/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    // new OptimizeCSSAssetsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
      // minimize: false,
      // mangle: false,
      // compress: {
        // warnings: false
      // },
      // sourceMap: true
    // })
  ]
});
