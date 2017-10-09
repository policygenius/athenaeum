Default Button Example:

```jsx
  <Button onClick={() => alert('Button clicked')} icon='lock'>Default Button</Button>
```

Info Button Example:

```jsx
      <Button variant='info'>Info</Button>
```

Disabled Button Example:

```jsx
      <Button variant='disabled'>Disabled</Button>
```

Action Button Example:

```jsx
      <Button icon='lock' variant='action'>Action</Button>
```

Action Lowlight Button Example:

```jsx
      <Button variant='lowlight'>Lowlight Action</Button>
```

Action Disabled Button Example:

```jsx
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

```jsx
      <Button variant='outline'>Outline Button</Button>
```

Outline Black Button Example:

```jsx
      <Button variant='outline-black'>Outline Button</Button>
```

Outline Orange Button Example:

```jsx
      <Button variant='outline-orange'>Outline Button</Button>
```

Solid Black Button Example:

```jsx
      <Button variant='solid-black'>Filled Button</Button>
```

Solid Orange Button Example:

```jsx
      <Button variant='solid-orange'>Filled Button</Button>
```
Toggle Button Example:

```jsx
      <Button variant='toggle'>Toggle Button</Button>
```

Toggle Button Active Example:

```jsx
      <Button variant='toggle-active'>Toggle Button</Button>
```

Slim Button Example:

```jsx
      <Button variant='action' slim>A Vertically Slim Button</Button>
```
