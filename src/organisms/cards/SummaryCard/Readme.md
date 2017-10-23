### Examples:

```jsx
    <SummaryCard
      text={[
        {
          header: 'header',
          subheader: 'subheader'
        },
        {
          header: 'secondaryHeader',
          subheader: 'another subhead'
        }
      ]}
      icon='xIcon'
      onIconClick={() => alert('you clicked real good')}
      footerLinks={[
        {
          text: 'A link',
          onClick: () => alert('footer')
        },
        {
          text: 'second link',
          onClick: () => alert('second')
        }
      ]}
    />
```

With additional information as children
```jsx
    <SummaryCard
      text={[
        {
          header: 'header',
          subheader: 'subheader'
        },
      ]}
      icon='xIcon'
      onIconClick={() => alert('you clicked real good')}
      footerLinks={[
        {
          text: 'A link',
          onClick: () => alert('footer')
        },
        {
          text: 'second link',
          onClick: () => alert('second')
        }
      ]}
    >
      <Text size={9} font='b'>
        Additional information your can supply to the card.
      </Text>
    </SummaryCard>
```

```jsx
    <SummaryCard
      text={[
        {
          header: 'header',
          subheader: 'subheader'
        },
        {
          header: 'secondaryHeader',
          subheader: 'another subhead'
        }
      ]}
      icon='greenCheckWithCircle'
      footerLinks={[
        {
          text: 'A link',
          onClick: () => alert('footer')
        },
      ]}
    />
```
