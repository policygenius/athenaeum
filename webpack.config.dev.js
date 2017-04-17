const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

module.exports = baseConfig({
  entry: [
    'webpack/hot/only-dev-server',
    './entry.js'
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-hot-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      syntax: 'scss'
    })
  ]
});
