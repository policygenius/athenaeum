Default Button Example:

    <Button onClick={() => alert('Button clicked')}>Default Button</Button>

Info Button Example:

      <Button kind="info">Info</Button>

Disabled Button Example:

      <Button kind="disabled">Disabled</Button>

Action Button Example:

      <Button kind="action">Action</Button>

Action Lowlight Button Example:

      <Button kind="lowlight">Lowlight Action</Button>

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
              kind="actionDisabled"
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

      <Button kind='outline'>Outline Button</Button>

Toggle Button Example:

      <Button kind='toggle'>Toggle Button</Button>
