GeneralForm Example:

_This is a form wrapper that can take components as children._

    <GeneralForm
      formName='ExampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
    >
      <TextComponent tag='p' type={ 3 } regular>First, a little about you and your humble abode</TextComponent>
      <TextField label='First name' placeholder='Enter your first name here' forProp=''/>
      <LinkWrapper href="#">
        <TextComponent
          type={ 7 }
        >
          Want to add more people to the policy?
        </TextComponent>
      </LinkWrapper>
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
    </GeneralForm>
