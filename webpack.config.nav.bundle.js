const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    './main_nav_entry.js',
  ],
  output: {
    path: path.resolve(__dirname, './main_nav/build/'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  plugins: [],
});
