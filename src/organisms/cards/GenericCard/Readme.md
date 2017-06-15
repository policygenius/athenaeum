Generic Card Example:

```example
    <GenericCard
      onClose={() => alert('I feel so closed rn')}
      footerText='Edit'
      onFooterLinkClick={() => alert("Ughhh~! You've clicked me")}
    >
      <Text tag={'h4'} type={4}>Janis Ian</Text>
      <Text tag={'h5'} type={6} color='neutral-5'>Added to policy.</Text>
    </GenericCard>
```

```example
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

```example
    <GenericCard variant='box'>
      <Icon icon='pgLogoOrange' width='160px' height='40px' />
    </GenericCard>
```

```example
    <GenericCard variant='mobile'>
      <Icon icon='pgLogoOrange' width='160px' height='40px' />
    </GenericCard>
```
