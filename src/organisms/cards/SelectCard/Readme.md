Select Card example: 

    class SelectCardExample extends React.Component {
      constructor() {
        super();

        this.state = {
          selectOptions: [ 
             { group: 'Group 1', options: [{value: '$300,000 (most common)'}] },
             { group: 'Group 2', options: [{value: '$400,000'}] },
             { group: 'Group 3', options: [{value: '$500,000'}] },
          ],
          value: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleClick() {
        alert('You clicked me!')
      }

      handleChange( event ) {
        this.setState({
          value: event.target.value
        });
      }

      render() {
        return (
          <SelectCard
            label='Personal liability'
            value={ this.state.value }
            selectOptions={ this.state.selectOptions }
            footerText='What does this cover?'
            onClick={ this.handleClick }
            onChange={ this.handleChange }
          />
       )
      }
    }
    
    <SelectCardExample />

