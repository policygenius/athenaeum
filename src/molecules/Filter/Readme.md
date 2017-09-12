NOTE: Filter will need to be placed inside a parent container to set the appropriate width in implementation. The width is not set here because the length of content in the select field will vary, causing the placement of the select caret to change.
### Filter Example:

```example
    <Filter
      label='Test'
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
