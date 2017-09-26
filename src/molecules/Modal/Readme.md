Modal Example:

This uses [`ReactModal`](https://github.com/reactjs/react-modal) under the hood to handle modal functionality.

```jsx
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
              <div>
                <Layout
                  mediumCols={[ 9, 3, 6, 3, 3 ]}
                  bottomSpacing='small'
                >
                  <TextField
                    label='Street address'
                    placeholder='Enter your street address'
                    input={{}}
                  />
                  <TextField
                    label='Apt. #'
                    placeholder='Apt. #'
                    input={{}}
                  />
                  <TextField
                    label='City'
                    placeholder='City'
                    input={{}}
                  />
                  <TextField
                    label='State'
                    placeholder='State'
                    input={{}}
                  />
                  <TextField
                    label='Zip code'
                    placeholder='Zip code'
                    input={{}}
                  />
                </Layout>

                <Spacer small />

                <Layout>
                  <Button variant='action'>Confirm your address</Button>
                </Layout>
                <Spacer medium />
              </div>
              <div>
                <Layout variant='bordered-buckets' mediumCols={[ 'auto' ]} flex>
                  <div>'Child 1'</div>
                  <div>'Child 2'</div>
                  <div>'Child 3'</div>
                  <div>'Child 4'</div>
                  <div>'Child 5'</div>
                </Layout>
              </div>
              <div>
                This is another section
              </div>
            </Modal>
          </div>
        )
      }
    }

    <ModalExample />
```

```jsx
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
            <Button onClick={this.openModal}>Open Mobile Modal</Button>

            <Modal
              header='Menu'
              onRequestClose={this.closeModal}
              isOpen={this.state.modalIsOpen}
              contentLabel='Modal'
              variant='mobile'
            >
              <MobileMenu
                tabs={[
                  { icon: 'phone', text: 'Expert Help', active: state.activeTab === 1 || !state.activeTab, key: 1 },
                  { icon: 'user', text: 'Save My Progress', active: state.activeTab === 2, key: 2 }
                ]}
                onClick={(key) => setState({ activeTab: key })}
              />
              <Layout>
                <div>Hello, world</div>
              </Layout>
            </Modal>
          </div>
        )
      }
    }

    <ModalExample />
```

