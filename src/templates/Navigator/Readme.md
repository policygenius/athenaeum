**[Open this in isolation mode to see it without the Styleguide sidebar.](/#!/Navigator)**

The navigator uses [react-stickynode](https://github.com/yahoo/react-stickynode) to make the contact card and leftRail text sticky.

Navigator Example:

```jsx

  const sampleOptions = [ { label: 'Select your home type', value: -1 } ];

  <div>
    <Navigator
      leftRailText='Home sweet home'
      userAlert={{
        condition: true,
        onClick: () => alert('click!'),
        color: 'accent-2',
        closeColor: 'accent-1',
        text: 'We need a little bit more information from you before we can continue.',
        textColor: 'neutral-8',
      }}
      stepProgressData={[
        { complete: true, icon: 'calculator', label: 'Aenean', link: '#' },
        { complete: true, icon: 'health', label: 'Phasellus', link: '#' },
        { current: true, icon: 'application', label: 'Curabitur', link: '#' },
        { inactive: true, icon: 'quotes', label: 'Etiam', link: '#' }
      ]}

      contactProps={{
        top: {
          text: 'Save my progress',
          icon: 'user',
          onClick: () => alert('top click')
        },
        bottom: {
          text: 'Chat with an Expert',
          icon: 'chat',
          onClick: () => alert('top click')
        }
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
            <TextField
              label='First name'
              placeholder='Enter your first name here'
              forProp=''
              input={{}}
            />

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

          <TextField
            label='Street address'
            placeholder='Enter address'
            forProp=''
            input={{}}
          />

          <Spacer xSmall />

          <Col
            bottomSpacing={0}
          >
            <Button variant='action'>Continue</Button>
          </Col>
        </Layout>
      </form>

    </Navigator>
  </div>
```
