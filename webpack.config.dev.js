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
