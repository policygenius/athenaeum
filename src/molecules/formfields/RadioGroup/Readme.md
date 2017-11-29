### RadioGroup Example:

```jsx
    class RadioGroupExample extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          value: '',
        };

        this.onChange = this.onChange.bind(this);
      }

      onChange(value) {
        this.setState({
          value
        });
      }

      render() {
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
              input={{
                name: 'food',
                value: this.state.value,
                onChange: this.onChange,
              }}
            />
            <RadioField
              label='Hot Dogs'
              radioValue='dogs'
              input={{
                name: 'food',
                value: this.state.value,
                onChange: this.onChange,
              }}
            />
          </RadioGroup>
        )
      }
    }

    <RadioGroupExample />
```
