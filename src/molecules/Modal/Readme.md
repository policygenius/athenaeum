Modal Example:

This uses [`ReactModal`](https://github.com/reactjs/react-modal) under the hood to handle modal functionality.

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
            <Button onClick={this.openModal}>Open Modal</Button>

            <Modal
              header={'Hmmm, we couldn\'t find your address'}
              onRequestClose={this.closeModal}
              isOpen={this.state.modalIsOpen}
              contentLabel='Modal'
            >
              <Layout
                fullwidth
                mediumCols={[ 9, 3, 6, 3, 3 ]}
                variant='form'
              >
                <TextField
                  label='Street address'
                  placeholder='Enter your street address'
                />
                <TextField
                  label='Apt. #'
                  placeholder='Apt. #'
                />
                <TextField
                  label='City'
                  placeholder='City'
                />
                <TextField
                  label='State'
                  placeholder='State'
                />
                <TextField
                  label='Zip code'
                  placeholder='Zip code'
                />
              </Layout>

              <Spacer small />

              <Layout
                fullwidth
              >
                <Button variant='action'>Confirm your address</Button>
              </Layout>
            </Modal>
          </div>
        )
      }
    }

    <ModalExample />
```
