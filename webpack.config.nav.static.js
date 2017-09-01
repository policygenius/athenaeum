const path = require('path');
const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    './static/MainNav/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './main_nav/static/'),
    filename: 'static.js',
    libraryTarget: 'umd'
  },
  plugins: [],
});
