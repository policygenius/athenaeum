const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const footerBaseConfig = require('./webpack.config.footer.base.js');

module.exports = footerBaseConfig({
  entry: [
    'babel-polyfill',
    './footer_entry.js',
  ],
  output: {
    path: path.resolve(__dirname, './styleguide/footer/build/'),
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
      template: path.resolve(__dirname, './footer/index.ejs'),
      filename: 'index.html',
      inject: 'body',
    })
  ],
});
