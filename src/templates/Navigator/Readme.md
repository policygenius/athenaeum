**[Open this in isolation mode to see it without the Styleguide sidebar.](/#!/Navigator)**

The navigator uses [react-stickynode](https://github.com/yahoo/react-stickynode) to make the contact card and leftRail text sticky.

Navigator Example:

```jsx

  const sampleOptions = [ { label: 'Select your home type', value: -1 } ];

  <div style={{ border: '1px solid black' }}>
    <Navigator
      stepIndicatorProps={{
        steps: [
          { text: 'Basics',
            path: '/basics',
            currentStepActive: false,
            clickable: true,
            nextStepAccessible: true
          },
          { text: 'Health',
            path: '/health_profile',
            currentStepActive: false,
            clickable: true,
            nextStepAccessible: true
          },
          { text: 'Lifestyle',
            path: '/lifestyle',
            currentStepActive: true,
            clickable: true,
            nextStepAccessible: false
          },
          { text: 'Pick a policy',
            path: 'comparison',
            currentStepActive: false,
            clickable: false,
            nextStepAccessible: false
          },
          { text: 'Application',
            path: 'application',
            currentStepActive: false,
            clickable: false,
            nextStepAccessible: false
          }
        ],
        navigateToPath: '/health/basic_info'
      }}
      mobileHeader={
        <MobileHeader
          text={
            <LinkWrapper
              type='secondary'
              onClick={() => alert('save progress')}
            >
              <Text size={10} font='b'>
                Save your progress
              </Text>
            </LinkWrapper>
          }
          quote={
            <Text
              size={6}
              font='a'
            >
              <Text tag='sup' size={10} font='a'>$</Text>39.50 <Text tag='span' size={10} font='a'>/mo</Text>
            </Text>
          }
          dropdown={{
            menuActive: false,
            onClick: () => alert('dropdown'),
          }}
        />
      }
      headerLinks={[
        {
          icon: 'chat',
          text: 'Chat',
          link: () => alert('chat!'),
        },
        {
          icon: 'phone',
          text: 'Call',
          link: 'tel:1-855-695-2255',
        },
      ]}
      overflow={{
        onClick: () => alert('overflow'),
      }}
      sidebar={<div>Sidebar</div>}
      footer={
          <Footer
            phoneNumber='1 (855) 695-2255'
            links={[
              { text: 'Security & Trust', href: '#trust' },
              { text: 'Privacy', href: '#privacy' },
              { text: 'Terms of Services', href: '#terms' },
            ]}
            onClickChat={() => alert('hi')}
            hours={
              [
                'Monday-Thursday | 9am-8pm EST',
                'Friday | 9am-6pm EST'
              ]
            }
          />
      }
      onMenuClick={() => alert('menu clicked')}
    >
      <form>
        <Layout bottomSpacing='small' fullwidth>
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
