```js
  import { Div, P } from 'atoms/Elementals';

  const TextC = (args) => {
    const { spacer, line1, line2, } = args;

    return (
      <Div spacer={spacer}>
        <P typography={5} weight='semibold'>{line1}</P>
        <P typography={6} weight='light'>{line2}</P>
      </Div>
    );
  };
```

### Lockup/TextC
```example
    <TextC line1='Header' line2='Subheader' />
```
