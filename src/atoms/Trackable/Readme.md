Trackable is a helper component that allows you render data attributes onto a Component.
This is to facilitate third-party analytics scripts and to explicitly expose elements/components that are actively being tracked.

This component:
- only takes in a `data` object as its property.
- takes key names from the `data` object, lowercases + kebab cases the key name and appends `data-`
- applies `data-attributes` on to its first child.

It should:
- only contain **1 child**.
- not nest `<Trackable />` with in a  `<Trackable />`

```html
  const dataProp = {
    'A Key Name': 100
  };

  <Trackable data={dataProp}>
    <div className='someComponent'>I have data-attributes!</div>
  </Trackable>

  // Renders as:
  <div className='someComponent' data-a-key-name=100>I have data-attributes!</div>
```

```example
    <Trackable data={{ 'some-key': 100, 'some space': 'oh' }}>
      <div className='someComponent'>I have data-attributes!</div>
    </Trackable>
```

```example
    <Trackable data={{ 'moar-keys': 101, 'LOWER CASE KEBABS': 'renames keys' }}>
      <Button>Trackable</Button>
    </Trackable>
```
