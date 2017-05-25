ErrorMessage example:

Note: You do not need to specifiy `ErrorMessage.default` in implementation. This is only needed for use in this guide.
Simply use `<ErrorMessage {...props} />`

```example
  const ErrorMessage = require('atoms/ErrorMessage');

  class ErrorMessageExample extends React.Component {
    constructor() {
      super()

      this.state = { visible: false }

      this.onClick = this.onClick.bind(this);
    }

    onClick() {
      this.setState({ visible: !this.state.visible });
    }

    render() {
      return (
        <div>
          <Button
            onClick={this.onClick}
          >
            Click Me to reveal error message
          </Button>

          <ErrorMessage.default condition={this.state.visible} message={'Error'} />
        </div>
      )
    }
  }

  <ErrorMessageExample />
```
