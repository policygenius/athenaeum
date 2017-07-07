```example
  <div>
    <ToggleField
      htmlFor=''
      label='Toggle Choices'
      tooltip="I'm a tooltip!"
      toggleChoices={[
        { label: 'Choice 1', value: 1 },
        { label: 'Choice 2', value: 2 }
      ]}
      input={{
        value: state.value,
        onChange: (value) => setState({ value })
      }}
    >
    </ToggleField>

    <Spacer small />

    <ToggleField
      htmlFor=''
      label='Toggle Choices'
      tooltip="I'm a tooltip!"
      toggleChoices={[
        { label: 'Choice 1', value: 1 },
        { label: 'Choice 2', value: 2 }
      ]}
      input={{
        value: state.value,
        onChange: (value) => setState({ value })
      }}
      meta={{
        error: 'Maecenas ullamcorper turpis quis elit volutpat',
        touched: true
      }}
    >
    </ToggleField>

    <Spacer small />

    <ToggleField
      htmlFor=''
      label='Toggle Choices'
      tooltip="I'm a tooltip!"
      toggleChoices={[
        { label: 'Choice 1', value: 1 },
        { label: 'Choice 2', value: 2 }
      ]}
      tooltipMessage='You can choose either of these awesome options!'
      input={{
        value: state.value,
        onChange: (value) => setState({ value })
      }}
    >
      <List
        condensed
        listItems={[
          <strong>Hope</strong>,
          'Love',
          <em>Peace</em>,
          <Icon icon='health' height='10px' width='20px' />
        ]}
      />
      Additional info goes here....
    </ToggleField>
  </div>
```
