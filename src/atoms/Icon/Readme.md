X-Icon example:

```jsx
    <Icon
      icon='xIcon'
      onClick={() => alert('You clicked me!')}
    />
```

Inline Icon example:

```jsx
  <div>
    <Text>
      <Icon
        icon='infinity'
        height='15px'
        width='35px'
        inline='left'
      />
      Text with inlined icon
    </Text>
    <Text size={7} font='a'>
      <Icon
        icon='checkmark'
        height='15px'
        width='15px'
        inline='left'
      />
      Text with inlined icon
    </Text>
    <Text size={3} font='a'>
      <Icon
        icon='checkmark'
        height='5px'
        width='5px'
        inline='left'
      />
      Text with inlined icon
    </Text>
    <Text size={1} font='a'>
      <Icon
        icon='checkmark'
        height='35px'
        width='35px'
        inline='left'
      />
      Text with inlined icon
    </Text>
  </div>
```

### Suggested method to resize Icons:
`<Icon />` returns an `svg` wrapped in a `div`.
Its default size is `72px`x`72px` or `ru(3)`.

```html
  <div className='custom-icon-wrapper'>
    <Icon icon='someLogo' />
  </div>
```

```css
  .custom-icon-wrapper svg{
    height: 30px;
  }
```

# All Available Icons:
```jsx
    const icons = require('assets/images');

    function DisplayAllIcons() {
      return (
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {
            Object.keys(icons).map( (key, idx) => {
              return (
                <div
                  key={`icon-${idx}`}
                  style={{
                    padding: '10px 10px 20px',
                    margin: '2px',
                    textAlign: 'center',
                    flexGrow: 1,
                    flexBasis: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'lightgrey',
                    alignItems: 'center',
                    lineHeight: '2rem',
                    color: '#4e4e4e',
                    fontFamily: 'Courier New',
                    fontWeight: '600',
                    fontSize: '.8rem'
                  }}
                >
                  "{ key }"
                  <div>
                    <Icon icon={key} />
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }

    <DisplayAllIcons />
```
