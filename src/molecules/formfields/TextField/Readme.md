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
      onChange: (value) => setState({ value })
    }}
    meta={{
      error: 'Maecenas ullamcorper turpis quis elit volutpat',
      touched: true
    }}
  />
```
