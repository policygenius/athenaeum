### PolicyCard Example:

```jsx
    <PolicyCard
      financialStrength={{
        value: 'A+',
        hoverMessage: <Text>Financial Strength Important</Text>
      }}
      customerService={{
        value: 'A+',
        hoverMessage: <Text>Customer Service Important</Text>
      }}
      totalCustomers={{
        value: 16,
        hoverMessage: <Text>Crowds Important</Text>
      }}
      policyType='Simplified Issue Whole Life'
      policyTooltip={
        <div>
          <Icon
            icon='checkmark'
            width='12px'
            height='14px'
            inline='left'
          />
          Requires Medical Exam
        </div>
      }
      policyTypeHoverMessage={
        <div>
          hello, world
        </div>
      }
      carrierLogo={
        <img
          src='#'
          alt='hello'
        />
      }
      premium={{
        price: 13,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert'
      }}
      discount={
        <Text color='neutral-3' type={7} light>
          <Text semibold type={7}>Save 5%</Text>
          { ' ' }
          when paying annually
        </Text>
      }
      onContinue={() => alert('continue button clicked')}
      onDetails={() => alert('details button clicked')}
      compareCheckbox={{
        onCompare: (e) => setState({ compare: e.target.checked }),
        compareSelected: state.compare,
        name: 'unique-name'
      }}
      footer={[
        <Icon icon='checkmark' height='16px' width='16px' />,
        <span style={{ color: '#78c07f', fontWeight: 'bold' }}>Excellent rates for diabetics</span>,
        'Prudential is more flexible with diabetic conditions than other carriers.'
      ]}
    />
```
