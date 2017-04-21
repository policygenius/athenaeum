```example
  const spacers = {
    xSmall: 'Extra Small',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    xLarge: 'Extra Large'
  };

  function DisplaySpacers() {
    return (
      <div>
        {
          Object.keys(spacers).map( (key) => {
            const size = {};

            size[key] = true;

            return (
              <div style={{ margin: '50px 0' }}>
                <TextComponent type={3}>{ spacers[key] }</TextComponent>
                <div style={{ backgroundColor: '#b3b3b3', width: '100%', height: '100px' }}></div>

                <Spacer {...size} />

                <div style={{ backgroundColor: '#b3b3b3', width: '100%', height: '100px' }}></div>
              </div>
            );
          })
        }
      </div>
    );
  }

  <DisplaySpacers />;
```
