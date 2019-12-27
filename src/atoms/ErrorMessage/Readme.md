ErrorMessage example:

Note: You do not need to specifiy `ErrorMessage.default` in implementation. This is only needed for use in this guide.
Simply use `<ErrorMessage {...props} />`

```jsx
  const ErrorMessage = require('atoms/ErrorMessage');

  class ErrorMessageExample extends React.Component {
    constructor() {
      super()

      this.state = { visible: false }

      this.onClick = this.onClick.bind(this);
    }

    onClick() {
      const { visible } = this.state;

      this.setState({ visible: !visible });
    }

    render() {
      const { visible } = this.state;

      return (
        <div>
          <Button
            onClick={this.onClick}
          >
            Click Me to reveal error message
          </Button>

          <ErrorMessage.default condition={visible} message='Error' type='warning' />
        </div>
      )
    }
  }

  <ErrorMessageExample />
```
