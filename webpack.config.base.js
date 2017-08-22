const path = require('path');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const postCSSConfig = require('./postcss.config.js');
const get = require('lodash/get');
const assign = require('lodash/assign');

const variant = process.env.CSS_VARIANT;

const baseDir = variant ? `tmp/${variant}` : 'src';

const includePaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'styleguide_assets'),
];

module.exports = options => ({
  entry: options.entry,
  output: options.output,
  externals: options.externals,
  devtool: 'source-map',
  context: path.resolve(__dirname, baseDir),
  resolve: assign({
    modules: [
      path.resolve(__dirname, baseDir),
      'node_modules'
    ],
  }, options.resolve),
  module: {
    rules: get(options, 'module.rules', []).concat([
      {
        test: /\.js$/,
        include: includePaths,
        use: [
          {
            // babel-loader will throw a deprecation warning
            // waiting for stable v7.0.0 to upgrade
            loader: 'babel-loader',
            options: { presets: [ 'react', 'es2015', 'stage-2' ] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader?importLoaders=3',
              options: {
                modules: true,
                localIdentName: 'rcl-[name]__[local]--[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader?parser=postcss-scss',
              options: {
                postCSSConfig
              }
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceComments: true,
                includePaths: [ baseDir ],
                data: "@import 'assets/stylesheets/global';"
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        include: includePaths,
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
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
              publicPath: '/'
            }
          }
        ]
      }
    ])
  },
  plugins: get(options, 'plugins', []).concat([
    new ExtractTextPlugin({
      filename: variant ? `assets/${variant}_styles.css` : 'assets/styles.css',
      allChunks: true
    })
  ])
});
