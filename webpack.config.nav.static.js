const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    './main_nav_component_entry.js',
  ],
  output: {
    path: path.resolve(__dirname, './main_nav/build/'),
    filename: 'static.js',
  },
  plugins: [],
});
