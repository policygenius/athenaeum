module.exports = function (plop) {
    plop.setGenerator('create-component', {
      description: 'This will create a new component',
      prompts: [
        {
            type: 'input',
            name: 'name',
            message: "What's the name of this component?",
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        },
        {
            type: 'input',
            name: 'type',
            message: "Is this an atom, molecule, organism, or template?",
            validate: function (value) {
              if ((/^(atom|molecule|organism|template)$/).test(value)) { return true; }
              return 'type needs to be an atom, molecule, organism or template';
            }
        }
        ],
        actions: [
          {
            type: 'add',
            path: 'src/{{type}}s/{{properCase name}}/index.js',
            templateFile: 'plop_templates/js_template.txt'
          },
          {
            type: 'add',
            path: 'src/{{type}}s/{{properCase name}}/Readme.md',
            templateFile: 'plop_templates/readme_template.txt'
          },
          {
            type: 'add',
            path: 'src/{{type}}s/{{properCase name}}/{{snakeCase name}}.module.scss',
            templateFile: 'plop_templates/scss_template.txt'
          },
        ]
    });
};
