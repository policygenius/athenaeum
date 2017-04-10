const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postCSSConfig = require('./postcss.config.js');

// configuration for HTML Webpack Plugin
// inject bundle.js into newly created index.html in dist folder
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './src/public/index.html'),
  filename: 'index.html',
  inject: 'body'
});

// helper to remove empty plugins if not in production
const removeEmptyPlugins = plugins => plugins.filter( plugin => !!plugin );
// helper to determine if plugin should be included if env is production
const prodPlugin = ( env, plugin ) => env === 'production' ?  plugin : undefined;

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: [
    'webpack/hot/only-dev-server',
    './public/index.js'
  ],
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.[hash].js',
    publicPath: 'dist'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
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
            // babel-loader will throw a deprecation warning
            // waiting for stable v7.0.0 to upgrade
            loader: 'babel-loader',
            options: { presets: [ 'react', 'es2015' ] }
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
                localIdentName: '[name]__[local]___[hash:base64:5]',
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
                sourceComments: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader?limit=10000'
          }
        ]
      },
      // set up for file-loader
      // currently moving appropriate files to build folder
      // but paths are not resolving correctly in CSS (EX: background URL)

      // {
      //   test: /\.(png|jpg|svg)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'assets/images'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: removeEmptyPlugins([
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'assets/stylesheets/styles.css',
      allChunks: true
    }),
    prodPlugin( process.env.NODE_ENV, new OptimizeCSSAssetsPlugin() ),
    prodPlugin( process.env.NODE_ENV,
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      })
    ),
    prodPlugin( process.env.NODE_ENV,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify( 'production' )
        }
      })
    ),
    // may not be necessary if we get file-loader to work
    new CopyWebpackPlugin([
      {
        from: './assets/images/**/*'
      }
    ])
  ])
};
