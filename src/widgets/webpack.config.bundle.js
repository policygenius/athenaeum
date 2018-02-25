const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const baseConfig = require('./webpack.config.base.js');

module.exports = ({ widget }) => baseConfig({
  entry: [
    `./${widget}/build/entry.js`,
  ],
  output: {
    path: path.resolve(__dirname, `./build/${widget}`),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, '../../src'),
      'node_modules'
    ],
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
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "./zip/[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  modulesName: widget,
});
