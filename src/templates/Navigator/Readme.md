**[Open this in isolation mode to see it without the Styleguide sidebar.](/#!/Navigator)**

The navigator uses [react-stickynode](https://github.com/yahoo/react-stickynode) to make the contact card and leftRail text sticky.

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

      contact={{
        chatClick: () => alert('get clicks'),
        chatText: 'hi, custom chat text'
      }}

      mobileHeader={
        <div>
          <HeaderAmount
            label='So far so good'
            amount={38.95}
            unit='/ month'
            onClick={() => setState({ menuActive: !state.menuActive })}
            menuActive={state.menuActive}
          />
          { state.menuActive &&
            <GenericCard variant='mobile'>
              <Button>hello, world</Button>
            </GenericCard>
          }
        </div>
      }

      sidebar={<div>Sidebar</div>}

      footer={
        <Footer
          phoneNumber='1 (808) 867-5309'
          links={[ { text: 'Footer here', href: '#trust' } ]}
          onClickChat={() => alert('yo')}
        />
      }
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

    </Navigator>
  </div>
```
