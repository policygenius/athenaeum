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
        const { value } = this.state;

        return (
          <SliderField
            sliderValues={
              [ 1000, 5000, 25000, 500000 ]
            }
            input={{
              value,
              onChange: this.onChange
            }}
          />
        );
      }
    }

    <SliderTest />
```
