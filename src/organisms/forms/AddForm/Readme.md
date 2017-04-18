Add Jewelry item Example:

    <AddForm
      formName='ExampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
      onClose={ () => alert('Clicked close button') }
    >
      <ImageAside
        type='simple'
        icon='jewelry'
        header='Jewelry item'
      />
      <TextField
        label='Describe the item you want to cover'
        placeholder='e.g. 1 carat engagement ring' forProp=''
      />
      <TextField
        label='How much is it worth?'
        placeholder='e.g. $2,000'
      />
      <Button style="action">Add This Item</Button>
    </AddForm>
Add Person Example:

    <AddForm
      formName='ExampleForm'
      onSubmit={ () => alert('FormSubmitted!') }
      onClose={ () => alert('Clicked close button') }
    >
      <TextField
        label='Full name'
        placeholder='Janis Ian'
      />
      <Button style="action">Add Person</Button>
    </AddForm>
