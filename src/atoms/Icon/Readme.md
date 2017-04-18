X-Icon example:

    <Icon icon='xIcon' />
All Icons (WIP):

    const icons = require('assets/images');

    function DisplayAllIcons() {
      return (
        <div style={{
          display: 'flex',
          alignContent: 'center',
          flexWrap: 'wrap'
          }}
        >
          {
            Object.keys(icons).map( key => {
              return (
                <div style={{
                  border: '1px solid grey',
                  padding: '5px',
                  margin: '5px',
                  textAlign: 'center',
                  flexGrow: 0,
                  flexBasis: '45%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'lightgrey',
                  alignItems: 'center'

                  }}
                >
                  "{ key }"
                  <div>
                    <Icon icon={ key } />
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }

    <DisplayAllIcons />
