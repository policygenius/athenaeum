Checkout Example:

```example
    const sampleOptions = [ { label: 'Select your home type', value: -1 } ];

    <CheckOut
      totalCost={{ curr: '$', value: 100, unit: ' due today' }}
      sidebar={<div>This is sidebar</div>}
      footer={
        <Footer
          links={[ { text: 'Footer link', href: '#' } ]}
          emailAddress='help@policygenius.com'
          onClickChat={() => alert('clicked')}
        />
      }
      userAlert={{
        condition: false,
        onClick: () => alert('you clicked the alert'),
        color: 'accent-2',
        closeColor: 'accent-1',
        text: 'Hello World',
        textColor: 'neutral-8'
      }}
      onMenuClick={() => alert('menu clicked')}
    >
      <form>
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
      </form>
    </CheckOut>
```
