const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/public/index.js'
  ],
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'index_bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify( 'production' )
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: [ 'react', 'es2015' ] } },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] }
    ]
  }
}
