const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const navBaseConfig = require('./webpack.config.nav.base.js');

const dev = process.env.NODE_ENV === 'development';

const plugins = [];

if (dev) {
  plugins.push(
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './main_nav/index.ejs'),
      filename: 'index.html',
      inject: 'body',
    })
  );
}

module.exports = navBaseConfig({
  entry: [
    'babel-polyfill',
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
  plugins,
});
