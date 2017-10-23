### Split Card Example:

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
      <Text>
        Hey there how is this going pretty great
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
