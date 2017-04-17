Default Button Example:

      <Button onClick={() => alert('Button clicked')}>Default Button</Button>
Info Button Example:

      <Button style="info">Info</Button>
Disabled Button Example:

      <Button style="disabled">Disabled</Button>

Action Button Example:

      <Button style="action">Action</Button>

Action Lowlight Button Example:

      <Button style="lowlight">Lowlight Action</Button>

Action Disabled Button Example:

      class ButtonExample extends React.Component {
        constructor() {
          super();
          this.state = {
            shake: false
          };

          this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
          this.setState({shake: true});
        }

        render() {
          return (
            <Button
              style="actionDisabled"
              shake={this.state.shake}
              onClick={this.handleClick}
            >
              {this.state.shake ? 'Uh oh' : 'Action Disabled'}
            </Button>
          );
        }
      }

      <ButtonExample />

Outline Button Example:

      <Button style='outline'>Outline Button</Button>

Toggle Button Example:

      <Button style='toggle'>Toggle Button</Button>
