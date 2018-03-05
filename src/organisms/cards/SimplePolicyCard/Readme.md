### SimplePolicyCard Example:

```jsx
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
```

Selected Example:

```jsx
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
```

No Compare Example:

```jsx
    <SimplePolicyCard
      carrierLogo={
        <Text font='a' type={7}>Multiple companies available</Text>
      }
      premium={{
        price: 13,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert',
        tooltip:
          <Tooltip text={<LinkWrapper type='secondary'>approx.</LinkWrapper>}>
            <div>
              <Text font='a' type={10}>This is a header</Text>
              <Spacer size={12} />
              <Text type={10}>And here's more additional text</Text>
            </div>
          </Tooltip>
      }}
      onContinue={() => alert('continue button clicked')}
      continueCTAText='Learn more'
    />
```

No CTA Example:

```jsx
    <SimplePolicyCard
      carrierLogo={
        <Text font='a' type={7}>Multiple companies available</Text>
      }
      premium={{
        price: 13,
        format: 'mo',
        defaultText: 'Quote available from a PolicyGenius expert',
        tooltip:
          <Tooltip text={<LinkWrapper type='secondary'>approx.</LinkWrapper>}>
            <div>
              <Text font='a' type={10}>This is a header</Text>
              <Spacer size={12} />
              <Text type={10}>And here's more additional text</Text>
            </div>
          </Tooltip>
      }}
    />
```
