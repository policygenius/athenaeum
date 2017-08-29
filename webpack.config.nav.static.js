const navBaseConfig = require('./webpack.config.nav.base.js');

module.exports = navBaseConfig({
  entry: [
    './main_nav_component_entry.js',
  ],
  output: {
    filename: 'component.js',
  },
  plugins: [],
});
