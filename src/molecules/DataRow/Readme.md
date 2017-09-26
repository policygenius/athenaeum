DataRow Example:

```jsx

    <div style={{ margin: '15px' }}>
      <DataRow
        label='Some Data'
        value={17.76}
        description='Make things happen!'
      />

      <DataRow
        label='More Data'
        amount={19.73}
      />

      <DataRow
        label='Discount'
        value='10% off'
        variant='sub'
      />

      <DataRow
        label='More Data'
        description='some node.'
        amount={19.73}
        variant='large'
        unit=' /mo'
      />
    </div>
```


#### Calculator Example: (GenericCard, DataRow, Line)
```jsx
    <GenericCard>
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
        label='A really really expensive diamond engagement ring'
        tooltip='Wow! such tip'
        value='100'
        variant='sub'
        indent
      />

      <Line border='dashed' spacer={1} />

      <DataRow
        label='More Data'
        description='little tiny text'
        amount={19.73}
        variant='large'
      />
    </GenericCard>
```
