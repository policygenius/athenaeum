First name Field:

```example
    class TextFieldExample extends React.Component {
      constructor() {
        super();

        this.state = {
          value: ''
        };

        this.onChange = this.onChange.bind(this);
      }

      onChange(event) {
        this.setState({ value: event.target.value });
      }

      render() {
        return (
          <TextField
            label='First Name'
            placeholder='Enter your first name here'
            input={{
              value: this.state.value,
              onChange: this.onChange
            }}
          />
        )
      }
    }

    <TextFieldExample />
```

Text field with error:

```example
  <TextField
    label='First Name'
    placeholder='Enter your first name'
    input={{
      value: state.value,
      onChange: (event) => setState({ value: event.target.value })
    }}
    meta={{
      error: 'Maecenas ullamcorper turpis quis elit volutpat',
      touched: true
    }}
  />
```

Text field - phone number example:

```example
  <TextField
    label='Phone Number'
    placeholder='In case of emergency'
    input={{
      value: state.value,
      onChange: event => setState({ value: event.target.value })
    }}
    mask='999-999-9999'
    maskChar='_'
  />
```

Text field - secure:

```example
  <TextField
    label='Phone Number'
    placeholder='In case of emergency'
    input={{
      value: state.value,
      onChange: event => setState({ value: event.target.value })
    }}
    mask='999-999-9999'
    maskChar='_'
    secure
  />
```
