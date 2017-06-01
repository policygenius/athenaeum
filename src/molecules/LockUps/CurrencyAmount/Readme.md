```js

  const CurrencyAmount = (props) => {
    // eslint-disable-next-line
    const { tag, spacer, curr, amount, unit, ...rest } = props;
    const [ whole, decimals ] = amount.split('.');

    return (
      <Span {...rest}>
        <sup>{curr}</sup>
        <strong>{whole}</strong>
        { decimals && <sup>.{decimals}</sup> }
        { unit && <small>{ unit }</small> }
      </Span>
    );
  };

  /* Usage Caveats:
   * - You are passing in a string as the amount not a number.
   * - tag & spacer props are filtered out because it is wrapped in a <Span />
   */
  <CurrencyAmount amount='100.00' />
```

### Lockup/CurrencyAmount
```example
    <CurrencyAmount curr='£' amount='12.11' unit='/mo' typography={3} color='brand-3' spacer={7} />
```
### decimal vs whole.
```example
    <CurrencyAmount amount='15' typography={3} />
```
