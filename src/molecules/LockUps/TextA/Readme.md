```js
  import { Div, P } from 'atoms/Elementals';

  const TextA = (args) => {
    const { spacer, line1, line2, } = args;

    return (
      <Div spacer={spacer}>
        <P weight='semibold' typography={4} color='neutral-2'>{line1}</P>
        <P typography={6} color='neutral-4'>{line2}</P>
      </Div>
    );
  };

```

### Lockup/TextA
```example
    <TextA line1='header' line2='sub header' />
```
