### FeaturedPolicyCard Example:

```jsx
    <FeaturedPolicyCard
      information={[
        {
          label: 'Policy Type',
          value: 'Level Term',
          hoverMessage: <Text>This is information about the policy type.</Text>
        },
        {
          label: 'Financial Strength',
          value: 'A+',
          hoverMessage: <Text>This is information about the financial strength</Text>
        },
        {
          label: 'Total Customers',
          value: 16000000,
          hoverMessage: <Text>This is information about total customers.</Text>
        },
      ]}
      carrierLogo={
        <img
          src='http://res.cloudinary.com/policygenius/image/upload/v1500328467/mutual-of-omaha-dark.svg'
          alt='hello'
        />
      }
      premium={{
        price: 26.73,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert'
      }}
      discount={
        <Text color='neutral-1' type={7}>
          Save 5% when paying annually
        </Text>
      }
      onContinue={() => alert('continue button clicked')}
      onDetails={() => alert('details button clicked')}
      onCompare={() => alert('compare button clicked')}
      header={[
        <Icon icon='checkmark' height='16px' width='16px' />,
        <span style={{ fontSize: '13px', color: '#78c07f', fontWeight: 'bold' }}>Great rates for peoeple with diabetes</span>,
      ]}
    />
```
