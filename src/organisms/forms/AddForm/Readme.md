Add Jewelry item Example:

```example
    <AddForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
      onClose={() => alert('Clicked close button')}
    >
      <Layout>
        <ImageAside
          simple
          icon='jewelry'
          header='Jewelry item'
        />

        <Spacer small />

        <TextField
          label='Describe the item you want to cover'
          placeholder='e.g. 1 carat engagement ring'
          forProp=''
        />

        <Spacer small />

        <TextField
          label='How much is it worth?'
          placeholder='e.g. $2,000'
        />

        <Spacer medium />

        <Button type='submit' variant='action'>Add This Item</Button>
      </Layout>
    </AddForm>
```

Add Person Example:

```example
    <AddForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
      onClose={() => alert('Clicked close button')}
    >
      <Layout>
        <TextField
          label='Full name'
          placeholder='Janis Ian'
        />

        <Spacer small />

        <Button type='submit' variant='action'>Add Person</Button>
      </Layout>
    </AddForm>
```
