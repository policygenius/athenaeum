X-Icon example:

```example
    <Icon icon='xIcon' />
```
All Icons (WIP):

```example
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
