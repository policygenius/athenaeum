AddForm Example:

    <AddForm
      formName='ExampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
    >
      <TextComponent>First, a little about you and your humble abode</TextComponent>
      <TextField label='First name' placeholder='Enter your first name here' forProp=''/>
      <SelectField
        forProp=''
        label='Home type'
        placeholder='Select your home type'
        selectOptions={[
        ['Value 1', 'Option 1'],
        ['Value 2', 'Option 2'],
        ['Value 3', 'Option 3']
        ]}
      />
      <TextField label='Street address' placeholder='Enter address' forProp=''/>
      <Button type='action'>Continue</Button>
    </AddForm>

