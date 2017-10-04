const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    './static/MainNav/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './main_nav/static/'),
    filename: 'static.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: false,
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
  ],
});
