Default Button Example:

      <Button>Default Button</Button>
Info Button Example:

      <Button type='info'>Info</Button>
Disabled Button Example:

      <Button type='disabled'>Disabled</Button>

Action Button Example:
      
      <Button type='action'>Action</Button>
        
Action Lowlight Button Example:

      <Button type='lowlight'>Lowlight Action</Button>

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
              type='actionDisabled'
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

      <Button type='outline' >Outline Button</Button>

