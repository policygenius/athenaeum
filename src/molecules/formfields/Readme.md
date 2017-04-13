First name Field:

    <TextField label='First name' placeholder='Enter your first name here' forProp=''/>
Stree address Field:

    <TextField label='Street address' placeholder='Enter address' forProp=''/>
Home type Field:

    <SelectField
      forProp=''
      label='Home type'
      placeholder='Select your home type'
      selectOptions={[
      ['Value 1', 'Option 1'],
      ['Value 2', 'Option 2'],
      ['Value 3', 'Option 3']
      ]}
    />
ToggleField Example:

    <ToggleField
      forProp=''
      label='Toggle Choices'
      toggleChoices={["Choice 1", "Choice 2"]}
    />

Checkbox List Example:
    
    class CheckboxListExample extends React.Component {
      constructor() {
        super();
        
        this.state = {
          data: [
            {id: 1, checkboxLabel: 'Nunc mattis diam libero'},
            {id: 2, checkboxLabel: 'Pellentesque habitant morbi'},
            {id: 3, checkboxLabel: 'Fringilla', checked: true},
            {id: 4, checkboxLabel: 'Sed lobortis et quam at', checked: true, disabled: true},
            {id: 5, checkboxLabel: 'Donec lobortis dui', disabled: true}
          ]
        };

        this.handleInputClick = this.handleInputClick.bind(this);
      }

      handleInputClick( item ) {
        const data = this.state.data;
        const selectedCheckbox = find(data, { id: item.id });
        selectedCheckbox.checked = !selectedCheckbox.checked;
        this.setState({ data });
      }

      render() {
        return (
          <CheckboxList
            label='Pellentesque habitant'
            data={this.state.data}
            handleClick={this.handleInputClick}
          />
        );
      }
    } 
    <CheckboxListExample />

