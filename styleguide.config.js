module.exports = {
  title: 'PolicyGenius React Component Library',
  sections: [
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
          components: () => (['src/molecules/step-progress/StepProgress.js'])
        }
      ]
    },
    {
      name: 'Organisms',
      components: 'src/organisms/**/*.js'
    },
    {
      name: 'Templates',
      components: 'src/templates/**/*.js'
    }
  ],
  // Use this to change the theme for the live code editor
  // Themes here: http://codemirror.net/demo/theme.html#
  highlightTheme: 'base16-light',
  verbose: true,
  template: 'styleguide_assets/index.html'
}
