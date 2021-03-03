### RadioGroup Example:

```jsx
    class RadioGroupExample extends React.Component {
      constructor(props) {
        super(props);

        this.state = { value: '' };

        this.onChange = this.onChange.bind(this);
      }

      onChange(value) {
        this.setState({ value });
      }

      render() {
        const { value } = this.state;

        return (
          <RadioGroup
            label='Test label'
            subLabel='Sublabel action'
            meta={{}}
            input={{}}
            tooltip='Hello friend'
          >
            <RadioField
              label='Burgers'
              radioValue='burgers'
              input={{ name: 'food', value, onChange: this.onChange }}
            />
            <RadioField
              label='Hot Dogs'
              radioValue='dogs'
              input={{ name: 'food', value, onChange: this.onChange }}
            />
          </RadioGroup>
        )
      }
    }

    <RadioGroupExample />
```

### RadioGroup Example (no label):

```jsx
    class RadioGroupExampleNoLabel extends React.Component {
      constructor(props) {
        super(props);

        this.state = { value: '' };

        this.onChange = this.onChange.bind(this);
      }

      onChange(value) {
        this.setState({ value });
      }

      render() {
        const { value } = this.state;

        return (
          <RadioGroup meta={{}} input={{}}>
            <RadioField
              label='Burgers'
              radioValue='burgers'
              input={{ name: 'food', value, onChange: this.onChange }}
            />
            <RadioField
              label='Hot Dogs'
              radioValue='dogs'
              input={{ name: 'food', value, onChange: this.onChange }}
            />
          </RadioGroup>
        )
      }
    }

    <RadioGroupExampleNoLabel />
```
