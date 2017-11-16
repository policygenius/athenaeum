### SliderField Example:

```jsx
    class SliderTest extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 5000,
      }

      this.onChange = this.onChange.bind(this);
    }

      onChange(value) {
        this.setState({
          value,
        });
      }

      render() {
        return (
          <SliderField
            sliderValues={
              [ 1000, 5000, 25000, 500000 ]
            }
            input={{
              value: this.state.value,
              onChange: this.onChange
            }}
          />
        );
      }
    }

    <SliderTest />
```
