CreditCardField Example:

```example
    <CreditCardField
      input={{
        onBlur: () => true,
        onFocus: () => true
      }}
    >
      <CreditCardField.Top>
        <TextField
          placeholder='Credit Card Number'
          noBaseStyle
        />
      </CreditCardField.Top>

      <CreditCardField.Bottom>
        <TextField
          placeholder='Expiration Date'
          input={{
            pattern: '[0-9]{13,16}'
          }}
          noBaseStyle
        />

        <TextField
          placeholder='3/4 Digit Security Code'
          noBaseStyle
        />
      </CreditCardField.Bottom>
    </CreditCardField>
```
