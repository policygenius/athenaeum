const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    'babel-polyfill',
    './main_nav_entry.js',
  ],
  output: {
    path: path.resolve(__dirname, './styleguide/main_nav/build/'),
    filename: 'styleguide_bundle.js',
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './main_nav/index.ejs'),
      filename: 'index.html',
      inject: 'body',
    })
  ],
});
