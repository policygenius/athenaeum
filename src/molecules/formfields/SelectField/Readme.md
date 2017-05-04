Label Example:

```example
    const SelectFieldExample = require('utils/ComponentWrapper')(SelectField);

    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectFieldExample
      label='Hi Friend'
      selectOptions={selection}
    />
```

No Label Example:

```example
    const SelectFieldExample = require('utils/ComponentWrapper')(SelectField);

    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectFieldExample
      placeholder='Placeholder'
      selectOptions={selection}
    />
```

Focused Example:
```example
    const SelectFieldExample = require('utils/ComponentWrapper')(SelectField);

    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectFieldExample
      placeholder='Placeholder'
      label='Select Field'
      selectOptions={selection}
      meta={{ active: true }}
    />
```

Group Options Example:

NOTE: `selectOptions` array must contain objects structured as follows:

`{ group: 'groupName', options: [{label: 'optionName', value: 1}]}`.

```example
    const SelectFieldExample = require('utils/ComponentWrapper')(SelectField);

    <SelectFieldExample
      placeholder='Placeholder'
      label='Select Field'
      selectOptions={[
       { group: 'Group 1', options: [ { label: 'Option 1', value: 1 } ] },
       { group: 'Group 2', options: [ { label: 'Option 2', value: 2 } ] },
       { group: 'Group 3', options: [ { label: 'Option 3', value: 3 } ] },
      ]}
    />
```

Select Card Type Example:

```example
    const SelectFieldExample = require('utils/ComponentWrapper')(SelectField);

    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectFieldExample
      type='select-card'
      label='Select Field Label'
      selectOptions={selection}
      placeholder='Placeholder'
    />
```
