const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const staticBaseConfig = require('./webpack.config.static.base.js');

const entryFiles = {
  'main_nav': 'MainNavNew',
  'footer': 'Footer',
}

module.exports = ({ static }) => staticBaseConfig({
  entry: [
    `./static/${entryFiles[static]}/index.js`,
  ],
  output: {
    path: path.resolve(__dirname, `./${static}/static/`),
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
