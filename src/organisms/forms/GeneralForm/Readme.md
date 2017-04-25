_This is a form wrapper that can take components as children._

GeneralForm Example - Navigator Page 1:

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
    <GeneralForm
      formName='ExampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
    >
      <Layout>
        <TextComponent tag='p' type={ 3 } regular>First, a little about you and your humble abode</TextComponent>

        <Spacer small />

        <TextField label='First name' placeholder='Enter your first name here' forProp=''/>

        <Spacer xSmall />

        <LinkWrapper href="#">
          <TextComponent
            type={ 7 }
          >
            Want to add more people to the policy?
          </TextComponent>
        </LinkWrapper>

        <Spacer small />

        <SelectFieldExample
          label='Select Field Label'
          placeholder='Placeholder'
          tooltip='This is a tooltip'
        />

        <Spacer small />

        <TextField
          mediumCols={ 9 }
          label='Street address'
          placeholder='Enter address'
        />

        <TextField
          mediumCols={ 3 }
          label='Apt. #'
          placeholder='Apt. #'
        />

        <Spacer medium />

        <Button variant="action">Continue</Button>
      </Layout>
    </GeneralForm>
