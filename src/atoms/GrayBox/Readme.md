This `GrayBox` is a gray container for content. See `BlockHeader` for an example.

## GrayBox Example 
```jsx
  <GrayBox
    cols={8}
    variant='right'
    colorDash='primary-3'
    leftOffset={3}
    colorDashPosition='right'
  >
    <div>
      <Text variant='label'>
        I'm a super title
      </Text>
      <Text tag='h2' font='a' size={2}>
        A box. A gray box.
      </Text>
      <Text font='b' size={9}>
        2018. The Year of The Color Dash
      </Text>
    </div>
  </GrayBox>;
```
