const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    'babel-polyfill',
    './main_nav_entry.js',
  ],
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
});
