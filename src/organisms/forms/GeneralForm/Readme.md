**GeneralForm Example**:

_This is a form wrapper that can take components as children._

    <GeneralForm
      formName='SampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
    >
      <TextField
        label='TextField Label'
      />
      <ToggleField
        label='ToggleField Label'
        toggleChoices={['Choice A', 'Choice B']}
      />
      <SelectField
        label='SelectField Label'
        selectOptions={[
        ['value1', 'Choice A'],
        ['value2', 'Choice B']
        ]}
      />
      <Button>Button</Button>
    </GeneralForm>

