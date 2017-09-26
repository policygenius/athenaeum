const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = isProd ?
  require('./webpack.config.base.js') :
  require('./webpack.config.dev.js');

const engineering = require('./table_of_contents/engineering');
const documentation = require('./table_of_contents/documentation');
const branding = require('./table_of_contents/branding');
const design = require('./table_of_contents/design');

module.exports = {
  title: 'PolicyGenius React Component Library',
  sections: [
    engineering,
    documentation,
    branding,
    design,
  ],
  // Use this to change the theme for the live code editor
  // Themes here: http://codemirror.net/demo/theme.html#
  highlightTheme: 'base16-light',
  verbose: true,
  template: 'styleguide_assets/index.html',
  webpackConfig,
  serverPort: parseInt(process.env.PORT, 10) || 6060,
  require: [
    'holderjs',
    'assets/stylesheets/base.scss',
    path.join(__dirname, 'styleguide_assets/rcl_styles.module.scss')
  ]
};
