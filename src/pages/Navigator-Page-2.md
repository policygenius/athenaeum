Navigator Page 2:

```example
  <Navigator leftRailText='Home sweet home' stepprogress={false}>
    <GeneralForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
    >
      <Layout>

        <TextComponent tag='p' type={4} semibold>
          Great, just a few more questions.
        </TextComponent>

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[ 'Yes', 'No' ]}
          tooltipMessage='Pick Me?!'
        />

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[ 'Yes', 'No' ]}
          tooltipMessage='No! pick me'
        />

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[ 'Yes', 'No' ]}
          tooltipMessage='Pick Me?!'
        />

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[ 'Yes', 'No' ]}
          tooltipMessage='Pick Me?!'
        />

        <Spacer small />

        <Button variant='action'>Continue</Button>

      </Layout>
    </GeneralForm>
  </Navigator>
```
