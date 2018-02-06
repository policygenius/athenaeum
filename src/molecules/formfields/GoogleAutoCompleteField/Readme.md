GoogleAutoCompleteField Example:

**You must provide either a `googlePlacesLink` or `googlePlacesAPIKey` prop for this example to work**

```jsx
  <GoogleAutoCompleteField
    input={{
      name: 'street',
    }}
    autocompleteAddressFields={(data) => { alert(JSON.stringify(data)) }}
  />
```
