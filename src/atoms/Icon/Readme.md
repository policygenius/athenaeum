We have a library of icons that are accessible by name, ie `icon='xIcon'`, which can be rendered as an `<img />` (default) or as an inlined SVG with its full DOM by passing the `renderSVGDOM` prop.
The library exists in our static-asset GCloud bucket. To make new icons available, you have to upload it there. You should also then
update the ICONS in `Icon/constants.js` -- `bin/refresh_svg_list` will pull down that list for you and print it to a `svgs.txt` file,
but you will have to manually update the `constants.js` file.

_Regular xIcon example, with onClick and size props:_
```jsx
    <Icon
      icon='xIcon'
      onClick={() => alert('You clicked me!')}
      width='20px'
      height='20px'
    />
```

_xIcon example with full SVG DOM and css hover:_
```scss
// You can't edit this. Sorry.
.icon-hover-example {
  svg path {
    fill: color('secondary-1');
    transition: all .3s;
  }

  &:hover {
    transform: rotate(90deg);
    border-right: 4px solid color('primary-1');
    transition: all .3s;

    svg path {
      fill: color('primary-1');
    }
  }
}
```
```jsx
    <Icon
      className='icon-hover-example'
      icon='vandalizism'
      renderSVGDOM
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
`<Icon />` returns an `svg` wrapped in a `span`, which will receive any props passed.
Note that passing a `style` prop will override the width and height props.
Its default size is `72px`x`72px` or `ru(3)`.

```html
<Icon
  icon='someLogo'
  className='custom-icon-wrapper'>
/>
```

```scss
  .custom-icon-wrapper svg {
    height: 30px;
  }
```

# All Available Icons:
_Note: this list isn't automatically kept in sync._
To sync, run `bin/refresh_svg_list`.
You will need to have access to our gutils
```jsx
    const { icons } = require('./constants');

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
            icons.map( icon => {
              return (
                <div
                  key={`icon-${icon}`}
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
                  "{ icon }"
                  <div>
                    <Icon icon={icon} />
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
