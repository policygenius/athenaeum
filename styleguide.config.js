const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const webpackConfig = isProd ?
  require('./webpack.config.base.js') :
  require('./webpack.config.dev.js');

module.exports = {
  title: 'PolicyGenius React Component Library',
  sections: [
    {
      name: 'Engineering',
      sections: [
        {
          name: 'Atoms',
          components: 'src/atoms/**/index.js'
        },
        {
          name: 'Molecules',
          sections: [
            {
              name: 'Asides',
              components: 'src/molecules/asides/**/index.js'
            },
            {
              name: 'Rows',
              components: () => [
                'src/molecules/DataRow/index.js',
                'src/molecules/ComparisonRowItem/index.js',
              ]
            },
            {
              name: 'FormFields',
              components: 'src/molecules/formfields/**/index.js'
            },
            {
              name: 'Headers',
              components: () => [
                'src/molecules/HeaderDiscount/index.js',
                'src/molecules/HeaderAmount/index.js',
              ]
            },
            {
              name: 'Lists',
              components: 'src/molecules/lists/**/index.js'
            },
            {
              name: 'Modal',
              components: 'src/molecules/Modal/index.js'
            },
            {
              name: 'Lock Ups',
              components: 'src/molecules/LockUps/**/index.js'
            },
            {
              name: 'Other',
              components: () => [
                'src/molecules/StepProgress/index.js',
                'src/molecules/AgentCallout/index.js',
              ]
            }
          ]
        },
        {
          name: 'Organisms',
          sections: [
            {
              name: 'Cards',
              components: 'src/organisms/cards/**/index.js'
            },
            {
              name: 'Forms',
              components: 'src/organisms/forms/**/index.js'
            },
            {
              name: 'Tables',
              components: 'src/organisms/tables/**/index.js'
            }
          ]
        },
        {
          name: 'Templates',
          components: 'src/templates/**/index.js',
        }
      ]
    },
    {
      name: 'Documentation',
      content: 'docs/introduction/index.md',
      sections: [
        {
          name: 'Getting Started',
          content: 'docs/introduction/getting_started.md',
        },
        {
          name: 'Atomic Design',
          content: 'docs/introduction/atomic_design.md',
        },
        {
          name: 'Component Design',
          content: 'docs/introduction/component_design.md',
        },
        {
          name: 'Best Practices',
          content: 'docs/introduction/best_practices.md',
        },
      ]
    },
    {
      name: 'Branding',
      sections: [
        {
          name: 'Colors',
          content: 'src/atoms/Color/Colors.md',
        },
      ]
    },
    {
      name: 'Design',
      sections: [
        {
          name: 'Buttons',
          content: 'src/atoms/Button/Design.md'
        },
        {
          name: 'Primary Header Row',
          sections: [
            {
              name: 'HeaderAmount',
              components: 'src/molecules/HeaderAmount/index.js'
            },
            {
              name: 'HeaderDiscount',
              components: 'src/molecules/HeaderDiscount/index.js'
            }
          ]
        },
        {
          name: 'Fields',
          components: 'src/molecules/formfields/**/index.js'
        },
        {
          name: 'Data Rows',
          components: 'src/molecules/DataRow/index.js'
        },
        {
          name: 'Navigation',
          components: 'src/molecules/StepProgress/index.js'
        },
        {
          name: 'Cards',
          components: 'src/organisms/cards/**/index.js'
        },
      ]
    }
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
