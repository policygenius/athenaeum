**[Open this in isolation mode to see it without the Styleguide sidebar.](/#!/Navigator)**

Navigator Example:

```example
const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;

  <div>
    <Navigator
      leftRailText='Home sweet home'
      stepProgressData={[
        { complete: true, icon: 'calculator', label: 'Aenean', link: '#' },
        { complete: true, icon: 'health', label: 'Phasellus', link: '#' },
        { current: true, icon: 'application', label: 'Curabitur', link: '#' },
        { inactive: true, icon: 'quotes', label: 'Etiam', link: '#' }
      ]}
    >
      <GeneralForm
        formName='ExampleForm'
        onSubmit={() => alert('FormSubmitted!')}
      >
        <Layout>
          <TextComponent tag='p' type={4} semibold>First, a little about you and your humble abode</TextComponent>

          <Spacer small />

          <TextField label='First name' placeholder='Enter your first name here' forProp='' />

          <Spacer small />

          <LinkWrapper href='#'>
            <TextComponent
              type={7}
            >
              Want to add more people to the policy?
            </TextComponent>
          </LinkWrapper>

          <Spacer small />

          <SelectFieldExample
            label='Home type'
            placeholder='Select your home type'
          />

          <div></div>

          <Spacer small />

          <TextField label='Street address' placeholder='Enter address' forProp='' />

          <Spacer medium />

          <Button variant='action'>Continue</Button>
        </Layout>
      </GeneralForm>
      <Navigator.Sidebar>
        Sidebar!
      </Navigator.Sidebar>
    </Navigator>
  </div>
```
