const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const footerBaseConfig = require('./webpack.config.footer.base.js');

module.exports = footerBaseConfig({
  entry: [
    './footer_entry.js',
  ],
  output: {
    path: path.resolve(__dirname, './footer/build/'),
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
