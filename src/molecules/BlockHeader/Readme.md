## BlockHeader
## Default:
```jsx
  <BlockHeader
    cols={10}
    colorDash='secondary-1'
    supertitle='Super title dawg'
    title='Title dawg'
  />
```

## Fixed right with vertical padding:
```jsx
  <BlockHeader
    cols={7}
    supertitle='Super title dawg'
    colorDash='primary-3'
    title='Title dawg'
    variant='right'
    verticalPadding='60px'
  />
```

## Fixed left:
```jsx
  <BlockHeader
    cols={7}
    supertitle='Super title dawg'
    title='Title dawg'
    variant='left'
  />
```

## Offset columns
**Note** leftOffset uses the `StyledWrapper` component, which can lead to buggy behavior
if the props are expected to change. More advanced usage may require a refactor of this component.
```jsx
  <BlockHeader
    cols={10}
    leftOffset={5}
    colorDash='primary-3'
    supertitle='Super title dawg'
    title='Title dawg'
  />
```
