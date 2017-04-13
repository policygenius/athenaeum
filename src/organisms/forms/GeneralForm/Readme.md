GeneralForm Example:

_This is a form wrapper that can take components as children._

    <GeneralForm
      formName='ExampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
    >
      <TextComponent tag='p' type={ 3 } regular>First, a little about you and your humble abode</TextComponent>

      <TextField label='First name' placeholder='Enter your first name here' forProp=''/>

      <LinkWrapper href="#">
        <TextComponent>
          Want to add more people to the policy?
        </TextComponent>
      </LinkWrapper>

      <SelectField
        label='Select Field Label'
        placeholder='Placeholder'
        selectOptions={[
          { value: 'Option 1' },
          { value: 'Option 2' },
          { value: 'Option 3' }
        ]}
        onChange={() => alert('Changing...')} />

      <TextField label='Street address' placeholder='Enter address' forProp=''/>

      <Button type='action'>Continue</Button>
    </GeneralForm>
