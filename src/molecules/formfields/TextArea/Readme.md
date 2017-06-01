Comment Field:

```example
    class TextAreaExample extends React.Component {
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
          <TextArea
            label='Comment'
            placeholder='How did we do?'
            input={{
              value: this.state.value,
              onChange: this.onChange
            }}
          />
        )
      }
    }

    <TextAreaExample />
```

Text field with error:

```example
  <TextArea
    label='Comment'
    placeholder='How did we do?'
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
