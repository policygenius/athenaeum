Generic Card Example:

```jsx
    <GenericCard
      icon='xIcon'
      onIconClick={() => alert('I feel so closed rn')}
      footerText='Edit'
      onFooterLinkClick={() => alert("Ughhh~! You've clicked me")}
    >
      <Text size={5} font='a' color='primary-3'>Janis Ian</Text>
      <Text size={8} font='b' color='neutral-3'>Added to policy.</Text>
    </GenericCard>
```

```jsx
    <GenericCard variant='checkout'>
      <DataRow
        label='Sub Data'
        tooltip='Everybody needs a little tip'
        amount={9.73}
      />

      <DataRow
        label='Sub Totals'
        value={<strong>10.22</strong>}
      />

      <DataRow
        label='Sub Data'
        value='10% off'
        variant='sub'
        indent
      />

      <Line border='dashed' spacer={1} />

      <DataRow
        label='More Data'
        amount={19.73}
        variant='large'
      />
    </GenericCard>
```

```jsx
    <GenericCard variant='box'>
      <Icon icon='pgLogoOrange' width='160px' height='40px' />
    </GenericCard>
```

```jsx
    <GenericCard variant='mobile'>
      <Icon icon='pgLogoOrange' width='160px' height='40px' />
    </GenericCard>
```
