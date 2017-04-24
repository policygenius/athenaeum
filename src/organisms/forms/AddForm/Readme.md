Add Jewelry item Example:

```example
    <AddForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
      onClose={() => alert('Clicked close button')}
    >
      <ImageAside
        simple
        icon='jewelry'
        header='Jewelry item'
      />

      <TextField
        label='Describe the item you want to cover'
        placeholder='e.g. 1 carat engagement ring'
        forProp=''
      />

      <TextField
        label='How much is it worth?'
        placeholder='e.g. $2,000'
      />

      <Button variant='action'>Add This Item</Button>
    </AddForm>
```

Add Person Example:

```example
    <AddForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
      onClose={() => alert('Clicked close button')}
    >
      <TextField
        label='Full name'
        placeholder='Janis Ian'
      />

      <Button variant='action'>Add Person</Button>
    </AddForm>
```
