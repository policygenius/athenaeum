```example
  <ToggleField
    htmlFor=''
    label='Toggle Choices'
    toggleChoices={[
      { label: 'Choice 1', value: 1 },
      { label: 'Choice 2', value: 2 }
    ]}
    tooltipMessage='You can choose either of these awesome options!'
    input={{
      value: state.value,
      onChange: (value) => setState({ value })
    }}
  />
```
