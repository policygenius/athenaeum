DateField Example:

```example
  const DateExample = require('utils/exampleWrapper')(DateField);

    <DateExample
      label='Date of Birth'
      input={{
        onBlur: () => true,
        onFocus: () => true
      }}
    >
      <TextField
        placeholder='MM'
        noBaseStyle
      />
      <TextField
        placeholder='DD'
        noBaseStyle
      />
      <TextField
        placeholder='YYYY'
        noBaseStyle
      />
    </DateExample>
```


```example
    const DateExample = require('utils/exampleWrapper')(DateField);

    <DateExample
      label='Date of Birth'
      input={{
        onBlur: () => true,
        onFocus: () => true
      }}
    >
      <TextField
        placeholder='MM'
        noBaseStyle
      />
      <TextField
        placeholder='YYYY'
        noBaseStyle
      />
    </DateExample>
```
