const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const baseConfig = require('./webpack.config.base.js');

const includePaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'styleguide_assets'),
];

const rules = [
  {
    test: /\.js$/,
    include: includePaths,
    use: [
      {
        loader: 'react-hot-loader/webpack'
      }
    ]
  }
];

if (!process.env.IGNORE_LINT) {
  rules.push({
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
  });
}

rules.merge;

module.exports = baseConfig({
  module: {
    rules
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      syntax: 'scss'
    })
  ]
});
