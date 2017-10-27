const path = require('path');
const footerBaseConfig = require('./webpack.config.footer.base.js');

module.exports = footerBaseConfig({
  entry: [
    './static/Footer/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './footer/static/'),
    filename: 'static.js',
    libraryTarget: 'umd'
  },
  plugins: [],
});
