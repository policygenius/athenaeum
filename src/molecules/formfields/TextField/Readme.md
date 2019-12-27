Text field without label:

```jsx
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
        const { value } = this.state;

        return (
          <TextField
            placeholder='Enter your first name here'
            input={{
              value,
              onChange: this.onChange
            }}
          />
        )
      }
    }

    <TextFieldExample />
```
Text field:

```jsx
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
        const { value } = this.state;

        return (
          <TextField
            label='First Name'
            placeholder='Enter your first name here'
            tooltip={'I\'m a tooltip'}
            input={{
              value,
              onChange: this.onChange
            }}
            subLabel='Optional subheader'
          />
        )
      }
    }

    <TextFieldExample />
```

Text field with focus:

```jsx
  <TextField
    label='First Name'
    placeholder='Enter your first name'
    tooltip={'I\'m a tooltip'}
    input={{
      value: state.value,
      onChange: (event) => setState({ value: event.target.value })
    }}
    meta={{
      active: true
    }}
  />
```

Text field with error:

```jsx
  <TextField
    label='First Name'
    placeholder='Enter your first name'
    tooltip={'I\'m a tooltip'}
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

```jsx
  <TextField
    label='Phone Number'
    placeholder='In case of emergency'
    tooltip={() => alert('I\'m a tooltip')}
    input={{
      value: state.value,
      onChange: event => setState({ value: event.target.value })
    }}
    mask='999-999-9999'
    maskChar='_'
  />
```
Text field - prefix example:

```jsx
  <TextField
    label='Income'
    placeholder='Eg. 200,000'
    tooltip={() => alert('I\'m a tooltip')}
    input={{
      value: state.value,
      onChange: event => setState({ value: event.target.value })
    }}
    prefix='$'
  />
```
Text field - postfix example:

```jsx
  <TextField
    label='Weight'
    placeholder='Enter your weight'
    tooltip={() => alert('I\'m a tooltip')}
    input={{
      value: state.value,
      onChange: event => setState({ value: event.target.value })
    }}
    postfix='lbs.'
  />
```

Text field - secure:

```jsx
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
Text field - swiftype:

```jsx
  <TextField
    placeholder='Ask a question about life insurance'
    input={{
      value: state.value,
      onChange: event => setState({ value: event.target.value })
    }}
    swiftype
  />
```
