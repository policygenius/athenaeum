First name Field:

    class TextFieldExample extends React.Component {
      constructor() {
        super();

        this.state = {
          value: ''
        };

        this.onChange = this.onChange.bind(this);
      }

      onChange(event) {
        this.setState({ value: event.target.value });
      }

      render() {
        return (
          <TextField
            label='First Name'
            placeholder='Enter your first name here'
            input={{
              value: this.state.value,
              onChange: this.onChange
            }}
          />
        )
      }
    }
    
    <TextFieldExample />

