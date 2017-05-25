```js
  import { Div, P } from 'atoms/Elementals';

  const LogoTextA = (args) => {
    const { spacer, line1, logo, } = args;

    return (
      <Div spacer={spacer}>
        <P weight='light' typography={6} color='neutral-4'>{line1}</P>
        { logo }
      </Div>
    );
  };

```

### Lockup/TextA
```example
    <LogoTextA
      line1='header'
      logo={<Icon icon='pgLogoOrange' width='120px' height='24px' />}
    />
```
