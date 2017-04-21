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
        toggleChoices={[ 'Yes', 'No' ]}
        tooltipMessage='Pick Me?!'
      />

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[ 'Yes', 'No' ]}
        tooltipMessage='No! pick me'
      />

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[ 'Yes', 'No' ]}
        tooltipMessage='Pick Me?!'
      />

      <ToggleField
        label='Toggle Choices'
        toggleChoices={[ 'Yes', 'No' ]}
        tooltipMessage='Pick Me?!'
      />

      <Button kind='action'>Continue</Button>
    </GeneralForm>
  </Navigator>
```
