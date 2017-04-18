**[Open this in isolation mode to see it without the Styleguide sidebar.](/#!/Navigator)**

Navigator Example:

      const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
      <Navigator leftRailText='Home sweet home'>
        <GeneralForm
          formName='ExampleForm'
          onSubmit={ () => alert('FormSubmitted!') }
        >
          <TextComponent tag='p' type={ 4 } semibold>First, a little about you and your humble abode</TextComponent>
          <TextField label='First name' placeholder='Enter your first name here' forProp=''/>
          <LinkWrapper href="#">
            <TextComponent
              type={ 7 }
            >
              Want to add more people to the policy?
            </TextComponent>
          </LinkWrapper>
          <SelectFieldExample
            label='Home type'
            placeholder='Select your home type'
          />
          <TextField label='Street address' placeholder='Enter address' forProp=''/>
          <Button style="action">Continue</Button>
        </GeneralForm>
      </Navigator>

