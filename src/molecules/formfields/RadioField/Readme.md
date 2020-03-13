RadioField Example:

```jsx
    class RadioFieldExample extends React.Component {
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
        const { value } = this.state;

        return (
          <div>
            <RadioField
              label='Fire extinguisher'
              input={{
                name: 'radio_test',
                value,
                onChange: this.onChange
              }}
              radioValue='fire_ext'
            />

            <Spacer size={18} />

            <RadioField
              label='Flame thrower'
              input={{
                name: 'radio_test',
                value,
                onChange: this.onChange
              }}
              radioValue='flame_throw'
            />
          </div>
        )
      }
    }

    <RadioFieldExample />
```
