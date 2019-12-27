Transition Example:

```jsx
  <div>
    <Button onClick={() => setState({ showMessage: !state.showMessage })}>Click me!</Button>
    <Spacer xsmall />
    { state.showMessage && (
      <FlashMessage variant='fadeInDown'>
        <ImageAside
          small
          basic={false}
          icon='headAside'
          header='hello'
        />
        <Spacer xsmall />
      </FlashMessage>
    )}
    <TextComponent>Maecenas gravida ex a sed vulputate, sodales cursus risus blandit.</TextComponent>
  </div>
```
