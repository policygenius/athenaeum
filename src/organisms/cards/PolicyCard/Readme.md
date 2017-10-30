### PolicyCard Example:

```jsx
    <PolicyCard
      information={{
        policyType: {
          label: 'Policy Type',
          value: 'Simplified Issue Whole Life',
          hoverMessage: <div>hello, world</div>,
          tooltip:
            <div>
              <Icon
                icon='checkmark'
                width='12px'
                height='14px'
                inline='left'
              />
              Requires Medical Exam
            </div>
        },
        financialStrength: {
          label: 'Financial Strength',
          value: 'A+',
          hoverMessage: <Text>Financial Strength Important</Text>
        },
        customerService: {
          label: 'Customer Service',
          value: 'A+',
          hoverMessage: <Text>Customer Service Important</Text>
        },
        totalCustomers: {
          label: 'Total Customers',
          value: 16,
          hoverMessage: <Text>Crowds Important</Text>
        },
      }}
      mainInformationValue='policyType'
      mobileInformationValues={[ 'policyType', 'financialStrength', 'totalCustomers' ]}
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
