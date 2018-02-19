const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

const entries = glob.sync("./src/**/index.js").reduce((accum, path) => {
  const name = path.match(/.*\/(.*)\/index.js/)[1];
  return Object.assign(accum, { [name]: path.replace('src/', '')  });
}, {
  index: 'entry.js'
});

module.exports = baseConfig({
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
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
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      mangle: false,
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
  ]
});
