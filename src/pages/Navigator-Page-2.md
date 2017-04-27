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
          toggleChoices={[
            { label: 'Choice 1', value: 1 },
            { label: 'Choice 2', value: 2 }
          ]}
          input={{
            value: state.val1,
            onChange: (val1) => setState({ val1 })
          }}
          tooltipMessage='Pick Me?!'
        />

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[
            { label: 'Choice 1', value: 1 },
            { label: 'Choice 2', value: 2 }
          ]}
          input={{
            value: state.val2,
            onChange: (val2) => setState({ val2 })
          }}
          tooltipMessage='No! pick me'
        />

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[
            { label: 'Choice 1', value: 1 },
            { label: 'Choice 2', value: 2 }
          ]}
          input={{
            value: state.val3,
            onChange: (val3) => setState({ val3 })
          }}
          tooltipMessage='Pick Me?!'
        />

        <Spacer small />

        <ToggleField
          label='Toggle Choices'
          toggleChoices={[
            { label: 'Choice 1', value: 1 },
            { label: 'Choice 2', value: 2 }
          ]}
          input={{
            value: state.val4,
            onChange: (val4) => setState({ val4 })
          }}
          tooltipMessage='Pick Me?!'
        />

        <Spacer small />

        <Button variant='action'>Continue</Button>

      </Layout>
    </GeneralForm>
  </Navigator>
```
