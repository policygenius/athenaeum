const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

module.exports = ({ widget }) => baseConfig({
  entry: [
    'babel-polyfill',
    `./${widget}/build/entry.js`,
  ],
  output: {
    path: path.resolve(__dirname, `./styleguide/${widget}/build/`),
    filename: 'styleguide_bundle.js',
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, `./src/${widget}/build/index.ejs`),
      filename: 'index.html',
      inject: 'body',
    })
  ],
  modulesName: widget,
});
