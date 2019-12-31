### SimpleFeaturedPolicyCard Example:

```jsx
    <SimpleFeaturedPolicyCard
      carrierLogo={(
        <img
          src='http://res.cloudinary.com/policygenius/image/upload/v1500328467/mutual-of-omaha-dark.svg'
          alt='hello'
        />
      )}
      premium={{
        price: 26.73,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert'
      }}
      onContinue={() => alert('continue button clicked')}
      compareCheckbox={{
        onCompare: (e) => setState({ compare: e.target.checked }),
        compareSelected: state.compare,
        name: 'unique-name'
      }}
    />
```
