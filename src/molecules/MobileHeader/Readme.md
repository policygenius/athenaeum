### MobileHeader Example:

```jsx
    <MobileHeader
      text={
        <LinkWrapper
          type='secondary'
          onClick={() => alert('save progress')}
        >
          <Text
            size={10}
            type='b'
          >
            Save your progress
          </Text>
        </LinkWrapper>
      }
      quote={
        <Text
          size={6}
          font='a'
        >
          <Text tag='sup' size={10} font='a'>$</Text>39.50 <Text tag='span' size={10} font='a'>/mo</Text>
        </Text>
      }
      dropdown={{
        menuActive: false,
        onClick: () => alert('dropdown'),
      }}
    />
```
