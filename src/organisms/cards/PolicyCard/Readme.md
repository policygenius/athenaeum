### PolicyCard Example:

```example
    <PolicyCard
      financialStrength='A+'
      customerService='A+'
      totalCustomers={5200000}
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
      carrierLogo={{
        publicId: 'protective-dark-70a11e83857839e815c0f897e9d086ed.png',
        type: 'asset'
      }}
      monthlyPremium={19.80}
      discount={
        <Text color='neutral-3' type={7} light>
          <Text semibold type={7}>Save 5%</Text>
          { ' ' }
          when paying annually
        </Text>
      }
      onContinue={() => alert('continue button clicked')}
      onDetails={() => alert('details button clicked')}
      onCompare={(e) => setState({ compare: e.target.checked })}
      compareSelected={state.compare}
      footer={[
        <Icon icon='checkmark' height='16px' width='16px' />,
        <span style={{ color: '#78c07f', fontWeight: 'bold' }}>Excellent rates for diabetics</span>,
        'Prudential is more flexible with diabetic conditions than other carriers.'
      ]}
    />
```
