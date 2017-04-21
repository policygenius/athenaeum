## Best Practices

*WIP* - There should be documentation on guiding principles on how to think about and make components

See [Airbnb React Guideline](https://github.com/airbnb/javascript/tree/master/react)

### Importing CSS & Class Names
Import styles into a component, the syntax is very specific. Just as you would import a child component into a parent, you do the same with CSS Module files. Using [`css-loader`](https://github.com/webpack-contrib/css-loader) in Webpack, CSS Modules creates a unique name for each class name, allowing for the prevention of collisions.

The unique name is typically created in the following format: `fileName__className__uniqueId`.

```js
import React from 'react';
import styles from '../path/simple_button.scss';

export default function simpleButton({ children }) {
  return (
    <button className={styles.button}>{children}</button>
  )
}
```

### PropTypes
`propTypes` and `defaultProps` are static properties, declared as high as possible within the component code. They should be immediately visible when reading the file, since they serve as documentation. All components should have propTypes.

```js
function Layout( props ) {
  const {
    children,
    childCols,
    breakpoint,
    horizontalAlign,
    verticalAlign
  } = props;
}
```

### Methods
```js
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.model.save()
  }

  handleNameChange = (e) => {
    this.props.model.changeName(e.target.value)
  }

  handleExpand = (e) => {
    e.preventDefault()
    this.setState({ expanded: !this.state.expanded })
  }
```
