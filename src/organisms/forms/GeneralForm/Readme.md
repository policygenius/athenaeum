_This is a form wrapper that can take components as children._

GeneralForm Example - Navigator Page 1:

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
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

      <SelectFieldExample
        label='Select Field Label'
        placeholder='Placeholder'
      />

      <TextField label='Street address' placeholder='Enter address' forProp=''/>

      <Button type='action'>Continue</Button>
    </GeneralForm>
