CreditCardField Example:

```example
    <CreditCardField
      creditCardNumber={
        <TextField
          placeholder='Credit Card Number'
          noBaseStyle
          input={{}}
        />
      }

      expirationDate={
        <TextField
          placeholder='Expiration Date'
          input={{
            pattern: '[0-9]{13,16}'
          }}
          noBaseStyle
        />
      }

      securityCode={
        <TextField
          placeholder='3/4 Digit Security Code'
          inputTooltip={() => alert('input tooltip clicked')}
          noBaseStyle
          input={{}}
        />
      }

      input={{
        onBlur: () => true,
        onFocus: () => true
      }}
    />
```
