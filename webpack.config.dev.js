const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const baseConfig = require('./webpack.config.base.js');

const includePaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'styleguide_assets'),
];

module.exports = baseConfig({
  module: {
    rules: [
      {
        test: /\.js$/,
        include: includePaths,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: './.eslintrc',
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        include: includePaths,
        use: [
          {
            loader: 'react-hot-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      syntax: 'scss'
    })
  ]
});
