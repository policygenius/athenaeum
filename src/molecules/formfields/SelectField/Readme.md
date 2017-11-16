Label Example:

```jsx
    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectField
      label='Hi Friend'
      selectOptions={selection}
      tooltip={"I'm a tooltip"}
      subLabel='Optional subheader'
    />
```

No Label Example:

```jsx
    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectField
      placeholder='Placeholder'
      selectOptions={selection}
      tooltip={"I'm a tooltip"}
    />
```

Focused Example:
```jsx
    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectField
      placeholder='Placeholder'
      label='Select Field'
      tooltip={"I'm a tooltip"}
      selectOptions={selection}
      meta={{ active: true }}
    />
```

Error Example:
```jsx
    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectField
      placeholder='Placeholder'
      label='Select Field'
      tooltip={"I'm a tooltip"}
      selectOptions={selection}
      meta={{
        error: 'Some error',
        touched: true
      }}
    />
```

Group Options Example:

NOTE: `selectOptions` array must contain objects structured as follows:

`{ group: 'groupName', options: [{label: 'optionName', value: 1}]}`.

```jsx

    <SelectField
      tooltip={"I'm a tooltip"}
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

```jsx
    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <SelectField
      label='Select Field Label'
      selectOptions={selection}
      placeholder='Placeholder'
      variant='card'
    />
```
