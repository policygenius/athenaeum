Comment Field:

```jsx
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
        const { value } = this.state;

        return (
          <TextAreaField
            label='Comment'
            placeholder='How did we do?'
            input={{
              value,
              onChange: this.onChange
            }}
          />
        )
      }
    }

    <TextAreaExample />
```

Text field with error:

```jsx
  <TextAreaField
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
