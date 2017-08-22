/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: {
    vendor: [ 'lodash', 'preact', 'preact-compat' ],
    app: './main_nav_entry.js'
  },
  output: {
    path: path.resolve(__dirname, './main_nav/build/'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        include: [
          path.resolve(__dirname, 'src/assets/images/main_nav'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              publicPath: '/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // new HTMLWebpackPlugin({
      // template: path.resolve(__dirname, './main_nav/index.html'),
      // filename: 'index.html',
      // inject: 'body',
    // }),
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
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new BundleAnalyzerPlugin()
  ]
});
