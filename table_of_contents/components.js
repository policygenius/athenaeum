module.exports = {
  name: 'Components',
  sections: [
    {
      name: 'Atoms',
      components: 'src/atoms/**/index.js'
    },
    {
      name: 'Molecules',
      sections: [
        {
          name: 'FormFields',
          components: 'src/molecules/formfields/**/index.js'
        },
        {
          name: 'Headers',
          components: () => [
            'src/molecules/BlockHeader/index.js',
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
          name: 'StarRating',
          components: 'src/molecules/StarRating/index.js'
        },
        {
          name: 'Menus',
          components: 'src/molecules/MobileMenu/index.js'
        },
        {
          name: 'Other',
          components: () => [
            'src/molecules/FeatureSquare/index.js',
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
