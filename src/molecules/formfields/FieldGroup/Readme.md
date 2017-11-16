### 3 Field Example:

```jsx
    const selection = [
      { label: 'Option 1',
        value: 1 },
      { label: 'Option 2',
        value: 2 },
      { label: 'Option 3',
        value: 3 }
    ];

    <FieldGroup
      labels={[
        {
          header: 'Test label 1'
        },
        {
          header: 'Test label 2'
        },
        {
          header: 'Test label 3'
        }
      ]}
      input={{}}
      meta={{}}
    >
      <SelectField
        placeholder='Placeholder'
        selectOptions={selection}
      />
      <SelectField
        placeholder='Placeholder'
        selectOptions={selection}
      />
      <SelectField
        placeholder='Placeholder'
        selectOptions={selection}
      />
    </FieldGroup>
```

### 2 Field Example

```jsx
    <FieldGroup
      labels={[
        {
          header: 'Test label 1',
          subLabel: 'Sub label 1'
        },
        {
          header: 'Test label 2',
          subLabel: 'Sub label 2'
        },
      ]}
      input={{}}
      meta={{}}
    >
      <TextField
        placeholder='mm'
        input={{}}
      />
      <TextField
        placeholder='yyyy'
        input={{}}
      />
    </FieldGroup>
```

### Focused Example

```jsx
    <FieldGroup
      labels={[
        {
          header: 'Test label 1',
        },
      ]}
      input={{}}
      meta={{
        active: true,
      }}
    >
      <TextField
        placeholder='mm'
        input={{}}
      />
      <TextField
        placeholder='yyyy'
        input={{}}
      />
    </FieldGroup>
```

### Error Example

```jsx
    <FieldGroup
      labels={[
        {
          header: 'Test label 1',
        },
        {
          header: 'Test label 2',
        },
        {
          header: 'Test label 3',
        },
      ]}
      input={{}}
      meta={{
        visited: true,
        error: 'Some error',
      }}
    >
      <TextField
        placeholder='mm'
        input={{}}
      />
      <TextField
        placeholder='dd'
        input={{}}
      />
      <TextField
        placeholder='yyyy'
        input={{}}
      />
    </FieldGroup>
```
