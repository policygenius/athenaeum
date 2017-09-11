### Filter Example:

```example
    <Filter
      label='Test label'
      selectOptions={[
        { label: 'Option 1',
          value: 1 },
        { label: 'Option 2',
          value: 2 },
        { label: 'Option 3',
          value: 3 }
      ]}
      value={2}
      onChange={() => alert('change')}
    />
```

### Filter No Label Example:

```example
    <Filter
      selectOptions={[
        { label: 'Option 1',
          value: 1 },
        { label: 'Option 2',
          value: 2 },
        { label: 'Option 3',
          value: 3 }
      ]}
      value={3}
      onChange={() => alert('change')}
    />
```
