const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/public/index.js'
  ],
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'index_bundle.js'
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: [ 'react', 'es2015' ] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  return [
                    require('postcss-modules-valus'),
                    require('autoprefixer')
                  ]
                }
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                importLoaders: 1
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader?importLoaders=1',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  return [
                    require('postcss-modules-values'),
                    require('autoprefixer')
                  ]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceComments: true
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    })
  ]
};
