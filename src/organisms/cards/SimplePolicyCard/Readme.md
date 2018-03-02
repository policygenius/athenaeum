### SimplePolicyCard Example:

```jsx
  <div>
    <SimplePolicyCard
      carrierLogo={
        <img
          src='https://cdn-staging.policygenius.com/assets/insurance-cards-logos/banner-life-dark-2x-c02aef5dc27115997f3185217e684806.png'
          alt='hello'
        />
      }
      premium={{
        price: 13,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert'
      }}
      onContinue={() => alert('continue button clicked')}
      onDetails={() => alert('details button clicked')}
      compareCheckbox={{
        onCompare: (e) => setState({ compare: e.target.checked }),
        compareSelected: state.compare,
        name: 'unique-name'
      }}
    />

    <Spacer size={24} />

    <SimplePolicyCard
      carrierLogo={
        <img
          src='https://cdn-staging.policygenius.com/assets/insurance-cards-logos/banner-life-dark-2x-c02aef5dc27115997f3185217e684806.png'
          alt='hello'
        />
      }
      premium={{
        price: 13,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert'
      }}
      onContinue={() => alert('continue button clicked')}
      onDetails={() => alert('details button clicked')}
      compareCheckbox={{
        onCompare: (e) => setState({ compare: e.target.checked }),
        compareSelected: true,
        name: 'unique-name-2'
      }}
    />
  </div>
```
