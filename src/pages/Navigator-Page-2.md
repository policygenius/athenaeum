Navigator Page 2:

```example
  <Navigator leftRailText='Home sweet home' stepprogress={false}>
    <GeneralForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
    >
      <TextComponent tag='p' type={4} semibold>
        Great, just a few more questions.
      </TextComponent>

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[
          { label: 'Yes', value: true },
          { label: 'No', value: false }
        ]}
        tooltipMessage='Pick Me?!'
        input={{
          value: state.val1,
          onChange: val1 => setState({ val1 })
        }}
      />

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[
          { label: 'Yes', value: true },
          { label: 'No', value: false }
        ]}
        tooltipMessage='No! pick me'
        input={{
          value: state.val2,
          onChange: val2 => setState({ val2 })
        }}
      />

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[
          { label: 'Yes', value: true },
          { label: 'No', value: false }
        ]}
        tooltipMessage='Pick Me?!'
        input={{
          value: state.val3,
          onChange: val3 => setState({ val3 })
        }}
      />

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[
          { label: 'Yes', value: true },
          { label: 'No', value: false }
        ]}
        tooltipMessage='Pick Me?!'
        input={{
          value: state.val4,
          onChange: val4 => setState({ val4 })
        }}
      />

      <Button variant='action'>Continue</Button>
    </GeneralForm>
  </Navigator>
```
