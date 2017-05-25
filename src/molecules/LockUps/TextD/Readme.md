```js
  import { Div, H1, P, Span } from 'atoms/Elementals';

  const TextD = (args) => {
    const { spacer, line1, line2, } = args;

    return (
      <Div spacer={spacer}>
        <P spacer={1} typography={7} color='neutral-3'>{line1}</P>
        <P>{line2}</P>
      </Div>
    );
  };
```

### Lockup/TextD
```example
    <TextD line1='name' line2='Victoria Bangladesh' />
```
