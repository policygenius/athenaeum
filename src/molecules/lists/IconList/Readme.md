IconList Example:

[Zeplin](https://app.zeplin.io/project/593ac52eeff01edb8651f865/screen/5a3bf1965fac4253c4b3b93d?)

```jsx
    <IconList
      data={[
        {
          icon: 'checkmark',
          text: 'Item 1 - with description and tooltip',
          description: 'The best description',
          tooltip: 'The best tooltip you\'ve ever seen, yo!'
        },
        {
          icon: 'closeAccent',
          text: 'Item 2',
          description: 'The less good'
        },
        {
          icon: 'checkmark',
          text: 'Item 3',
        },
        {
          icon: 'policygeniusSymbolCenter',
          text: 'Item 4',
          description: 'The second best description'
        },
        {
          icon: 'dogBones',
          text: 'Item 5',
          tooltip: 'I\'m honestly not that great of a tooltip'
        },
      ]}
    />
```

IconList Example with Custom Spacing:

When using the `IconList` with a description, it's preferred that you use an itemSpacing of `24px`

```jsx
    <IconList
      itemSpacing='24px'
      type='7'
      data={[
        {
          icon: 'checkmark',
          text: 'Accidental death benefit',
          description: 'Pays an additional death benefit on top of the base policy\'s death benefit if death resulted from certain accidental injuries.',
        },
        {
          icon: 'checkmark',
          text: 'Waiver of premiums',
          description: 'The best description'
        },
        {
          icon: 'checkmark',
          text: 'Child rider',
          tooltip: 'Covers all current & future dependent children (age 15 days - 18 years old) in one rider. Available coverage of $1,000 - $10,000.',
          description: 'Provides additional protection for eligible children.'
        }
      ]}
    />
```
