**[Open this in isolation mode to see it without the Styleguide sidebar.](/#!/Navigator)**

Navigator Example:

```example

  const sampleOptions = [ { label: 'Select your home type', value: -1 } ];

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
        <Layout bottomSpacing='small'>
          <TextComponent tag='p' type={4} semibold>First, a little about you and your humble abode</TextComponent>

          <Col>
            <TextField label='First name' placeholder='Enter your first name here' forProp='' />

            <LinkWrapper href='#'>
              <TextComponent
                type={7}
              >
                Want to add more people to the policy?
              </TextComponent>
            </LinkWrapper>
          </Col>

          <SelectField
            label='Home type'
            placeholder=''
            value={-1}
            tooltip='Tooltips!'
            selectOptions={sampleOptions}
          />

          <TextField label='Street address' placeholder='Enter address' forProp='' />

          <Spacer xSmall />

          <Button variant='action'>Continue</Button>
        </Layout>
      </GeneralForm>
      <Navigator.Sidebar>
        Sidebar!
      </Navigator.Sidebar>

      <Navigator.Footer>
        <Footer
          phoneNumber='1 (808) 867-5309'
          links={[
            { text: 'Footer here', href: '#trust' },
          ]}
          onClickChat={() => alert('yo')}
        >
        </Footer>
      </Navigator.Footer>

    </Navigator>
  </div>
```
