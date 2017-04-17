Select Card example: 

    class SelectCardExample extends React.Component {
      constructor() {
        super();

        this.state = {
          selectOptions: [ 
             { group: 'Group 1', options: [{label: '$300,000 (most common)', value: 1}] },
             { group: 'Group 2', options: [{label: '$400,000', value: 2}] },
             { group: 'Group 3', options: [{label: '$500,000', value: 3}] },
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
            placeholder='Placeholder'
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

