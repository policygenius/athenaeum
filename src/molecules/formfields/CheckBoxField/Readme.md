Checkbox List Example:

```example    
    class CheckboxListExample extends React.Component {
      constructor() {
        super();

        this.state = {
          data: [
            { id: 1, checkboxLabel: 'Nunc mattis diam libero' },
            { id: 2, checkboxLabel: 'Pellentesque habitant morbi' },
            { id: 3, checkboxLabel: 'Fringilla', checked: true },
            { id: 4, checkboxLabel: 'Sed lobortis et quam at', checked: true, disabled: true },
            { id: 5, checkboxLabel: 'Donec lobortis dui', disabled: true }
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
```
