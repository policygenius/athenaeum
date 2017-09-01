/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production';

const imagePublicPath = isProd ? '/rcl-pg/latest/main_nav/' : '/';

const baseConfig = require('./webpack.config.base.js');

module.exports = (options) => baseConfig({
  entry: options.entry,
  output: options.output,
  resolve: options.resolve,

  // Add this back in when this config is decoupled from main base config
  //
  // module: {
    // rules: [
      // {
        // test: /\.svg$/i,
        // include: [
          // path.resolve(__dirname, 'src/assets/images/main_nav'),
        // ],
        // use: [
          // {
            // loader: 'file-loader',
            // options: {
              // name: '[name].[ext]',
              // outputPath: 'images/',
              // publicPath: imagePublicPath,
            // }
          // }
        // ]
      // },
    // ]
  // },

  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        GHOST_ENDPOINT: JSON.stringify(process.env.GHOST_ENDPOINT),
        GHOST_CLIENT_SECRET: JSON.stringify(process.env.GHOST_CLIENT_SECRET),
      },
    }),
    new OptimizeCSSAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: true,
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "../zip/[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ]),
});
