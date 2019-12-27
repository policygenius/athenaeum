Checkout Example:

```jsx
    const sampleOptions = [ { label: 'Select your home type', value: -1 } ];

    <CheckOut
      totalCost={{ curr: '$', value: 100, unit: ' due today' }}
      sidebar={<div>This is sidebar</div>}
      footer={(
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
      )}
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

          <Col bottomSpacing={0}>
            <Button variant='action'>Continue</Button>
          </Col>
        </Layout>
      </form>
    </CheckOut>
```
