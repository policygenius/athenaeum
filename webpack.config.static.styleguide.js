const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const staticBaseConfig = require('./webpack.config.static.base.js');

module.exports = ({ static }) => staticBaseConfig({
  entry: [
    'babel-polyfill',
    `./${static}_entry.js`,
  ],
  output: {
    path: path.resolve(__dirname, `./styleguide/${static}/build/`),
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
      template: path.resolve(__dirname, `./${static}/index.ejs`),
      filename: 'index.html',
      inject: 'body',
    })
  ],
  modulesName: static,
});
