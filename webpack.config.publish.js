const webpack = require('webpack');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: [ './entry.js' ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    lodash: 'lodash',
    classnames: 'classnames'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          classPrefix: 'svg-class-[hash:8]-',
          idPrefix: 'svg-id-[hash:8]-',
          removeTags: true,
          removingTags: [ 'desc', 'defs', 'style' ],
          removeSVGTagAttrs: true,
          removingTagAttrs: [ 'xmlns', 'id', 'data-name', 'version', 'xlink', 'class' ]
        }
      }
    ]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      mangle: false,
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
});
