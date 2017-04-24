Default Button Example:

```example
  <Button onClick={() => alert('Button clicked')}>Default Button</Button>
```

Info Button Example:

```example
      <Button variant='info'>Info</Button>
```

Disabled Button Example:

```example
      <Button variant='disabled'>Disabled</Button>
```

Action Button Example:

```example
      <Button variant='action'>Action</Button>
```

Action Lowlight Button Example:

```example
      <Button variant='lowlight'>Lowlight Action</Button>
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
              variant='actionDisabled'
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
      <Button variant='outline'>Outline Button</Button>
```

Toggle Button Example:

```example
      <Button variant='toggle'>Toggle Button</Button>
```
