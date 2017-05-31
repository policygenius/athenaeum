module.exports = {
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
};
