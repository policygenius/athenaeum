const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = isProd ?
  require('./webpack.config.base.js') :
  require('./webpack.config.dev.js');

const components = require('./table_of_contents/components');
const documentation = require('./table_of_contents/documentation');
const branding = require('./table_of_contents/branding');

module.exports = {
  title: 'Policygenius React Component Library',
  sections: [
    documentation,
    branding,
    components,
  ],
  // Use this to change the theme for the live code editor
  // Themes here: http://codemirror.net/demo/theme.html#
  highlightTheme: 'base16-light',
  template: 'styleguide_assets/index.html',
  webpackConfig,
  serverPort: parseInt(process.env.PORT, 10) || 6060,
  require: [
    'lazysizes/plugins/rias/ls.rias.min',
    'lazysizes/lazysizes.min',
    'holderjs',
    'assets/stylesheets/base.scss',
    path.join(__dirname, 'styleguide_assets/rcl_styles.module.scss')
  ]
};
