SplitField (Height ft./in.):

```jsx
    <SplitField
      label='Height'
      input={{
        onBlur: () => true,
        onFocus: () => true
      }}
      meta={{ touched: true, error: 'hello' }}
    >
      <TextField
        type='text'
        placeholder='ft'
        noBaseStyle
        input={{ maxLength: 1 }}
      />
      <TextField
        placeholder='in'
        noBaseStyle
        input={{ maxLength: 2 }}
      />
    </SplitField>
```
