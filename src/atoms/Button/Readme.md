Default Button Example:

```example
  <Button onClick={() => alert('Button clicked')}>Default Button</Button>
```

Info Button Example:

```example
      <Button kind='info'>Info</Button>
```

Disabled Button Example:

```example
      <Button kind='disabled'>Disabled</Button>
```

Action Button Example:

```example
      <Button kind='action'>Action</Button>
```

Action Lowlight Button Example:

```example
      <Button kind='lowlight'>Lowlight Action</Button>
```

Action Disabled Button Example:

```example
      class ButtonExample extends React.Component {
        constructor() {
          super();
          this.state = {
            shake: false
          };

          this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
          this.setState({ shake: true });
        }

        render() {
          return (
            <Button
              kind='actionDisabled'
              shake={this.state.shake}
              onClick={this.handleClick}
            >
              {this.state.shake ? 'Uh oh' : 'Action Disabled'}
            </Button>
          );
        }
      }

      <ButtonExample />
```

Outline Button Example:

```example
      <Button kind='outline'>Outline Button</Button>
```

Toggle Button Example:

```example
      <Button kind='toggle'>Toggle Button</Button>
```
