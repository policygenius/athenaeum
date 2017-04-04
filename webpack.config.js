const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './app/public/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/,  exclude: /node_modules/, loader: "eslint-loader" }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: [ 'react', 'es2015' ] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract( 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader' ) },
      { test: /\.module\.scss$/, loader: ExtractTextPlugin.extract( ['style-loader?sourceMap', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader', 'sass-loader?sourceMap'] ) },
      { test: /\.scss$/, exclude: /\.module\.scss$/, loader: ExtractTextPlugin.extract( ['style-loader?sourceMap', 'css-loader!postcss-loader', 'sass-loader?sourceMap'] ) }
    ]
  },
  postcss: [
    require('postcss-modules-values'),
    require('autoprefixer')
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('styles.css')
  ]
};
