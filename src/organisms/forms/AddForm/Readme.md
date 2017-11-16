Add Jewelry item Example:

```jsx
    <AddForm
      formName='ExampleForm'
      onSubmit={(e) => {
        e.preventDefault();
        alert('FormSubmitted!');
      }}
      onClose={() => alert('Clicked close button')}
    >
      <Layout>
        <ImageAside
          simple
          icon='rentersColor3X'
          header='Jewelry item'
        />

        <Spacer small />

        <TextField
          label='Describe the item you want to cover'
          placeholder='e.g. 1 carat engagement ring'
          forProp=''
          input={{}}
        />

        <Spacer small />

        <SelectField
          label='How much is it worth?'
          placeholder='e.g. $2,000'
          selectOptions={[ { label: "It's never enough", value: 0 } ]}
        />

        <Spacer medium />

        <Button type='submit' variant='action'>Add This Item</Button>
      </Layout>
    </AddForm>
```

Add Person Example:

```jsx
    <AddForm
      formName='ExampleForm'
      onSubmit={() => alert('FormSubmitted!')}
      onClose={() => alert('Clicked close button')}
    >
      <Layout>
        <TextField
          label='Full name'
          placeholder='Janis Ian'
          input={{}}
        />

        <Spacer small />

        <Button type='submit' variant='action'>Add Person</Button>
      </Layout>
    </AddForm>
```
