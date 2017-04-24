const isProd = process.env.NODE_ENV === 'production';
const webpackConfig = isProd ?
  require('./webpack.config.prod.js') :
  require('./webpack.config.dev.js');

module.exports = {
  title: 'PolicyGenius React Component Library',
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction/index.md',
      sections: [
        {
          name: 'Getting Started',
          content: 'docs/introduction/getting_started.md'
        },
        {
          name: 'Atomic Design',
          content: 'docs/introduction/atomic_design.md'
        },
        {
          name: 'Component Design',
          content: 'docs/introduction/component_design.md'
        },
        {
          name: 'Best Practices',
          content: 'docs/introduction/best_practices.md'
        },
      ]
    },
    {
      name: 'Colors',
      content: 'src/assets/stylesheets/base_styles/Colors.md'
    },
    {
      name: 'Atoms',
      components: 'src/atoms/**/*.js'
    },
    {
      name: 'Molecules',
      sections: [
        {
          name: 'Asides',
          components: 'src/molecules/asides/**/*.js'
        },
        {
          name: 'Lists',
          components: 'src/molecules/lists/**/*.js'
        },
        {
          name: 'FormFields',
          components: 'src/molecules/formfields/**/*.js'
        },
        {
          name: 'TextLockups',
          components: 'src/molecules/text-lockups/**/*.js'
        },
        {
          name: 'Other',
          components: () => [ 'src/molecules/StepProgress/index.js' ]
        }
      ]
    },
    {
      name: 'Organisms',
      sections: [
        {
          name: 'Cards',
          components: 'src/organisms/cards/**/*.js'
        },
        {
          name: 'Forms',
          components: 'src/organisms/forms/**/*.js'
        }
      ]
    },
    {
      name: 'Templates',
      components: 'src/templates/**/*.js'
    },
    {
      name: 'Pages',
      sections: [
        {
          name: 'Navigator Page 2',
          content: 'src/pages/Navigator-Page-2.md'
        }
      ]
    }
  ],
  // Use this to change the theme for the live code editor
  // Themes here: http://codemirror.net/demo/theme.html#
  highlightTheme: 'base16-light',
  verbose: true,
  template: 'styleguide_assets/index.html',
  webpackConfig,
  serverPort: parseInt(process.env.PORT, 10) || 6060
};
