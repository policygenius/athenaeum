module.exports = {
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
          name: 'Loading',
          components: 'src/molecules/Loading/index.js'
        },
        {
          name: 'Lock Ups',
          components: 'src/molecules/LockUps/**/index.js'
        },
        {
          name: 'Menus',
          components: 'src/molecules/MobileMenu/index.js'
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
    },
    {
      name: 'Wrappers',
      components: 'src/wrappers/**/index.js',
    }
  ],
};
