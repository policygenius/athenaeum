### Loading Example:

```example
  class ModalExample extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        modalIsOpen: false
      }

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({
        modalIsOpen: true
      });
     }

     closeModal() {
        this.setState({
          modalIsOpen: false
        });
      }

      render() {
        return (
          <div>
            <Button onClick={this.openModal}>Open Loading Component</Button>

            <Loading
              onRequestClose={this.closeModal}
              isOpen={this.state.modalIsOpen}
              icon='ellipsis'
              messages={[
                'Pinging our insurers',
                'Waiting for their response',
                'Cross-checking their data',
                'Finding you the best rates',
                'Saving your progress'
              ]}
            />
          </div>
        )
      }
    }

    <ModalExample />
```
