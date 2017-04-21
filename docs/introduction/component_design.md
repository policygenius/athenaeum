
### Creating a component
So you want to create a component. A Component should list component `propTypes`.
RCL shows live, editable examples based on Markdown files. Uses hot reloaded dev server.

Creating a new component. You can generate a component with [plop]() by running:  

 `yarn run c`  

Starts a cli prompt which will create the following component directory and files:

```html
/ComponentName
- component_name.module.scss
- index.js
- Readme.md
```

## What comes out of the box?
*WIP* - There should be documentation on an ideal Component, standard props, etc.


### Basic component libraries
```js
import React, { PropTypes } from 'react';
import styles from './component_name.module.scss';
import classnames from 'classnames';
```

### Standard Props
* `className` This prop will add a new className to any inherent classNames provided in the component's index.js file.
* `children` This prop is for when a component has sub components.


### CSS Modules
With CSS Modules, you can modularize your CSS into component specific files and use built in 'name spacing' to avoid class name collision and never worry about overriding existing styles.
CSS Modules will create namespaced class names, such as `simpleButton__button__id` and `infoButton__button_id`, preventing any confusion.
You import these styles into a component, the syntax is very specific. Just as you would import a child component into a parent, you do the same with CSS.

To give a component access to its styles, import the styles from the `component_name.module.scss` file as a styles object.

**Importing Component Styles:**  
```js
import styles from './component_name.module.scss';
```

**Using Component Styles:**  
```js
<button className={ styles['action-button'] }>
```
You can styles class names to your JSX markup!
**Note:** you have the option to use `styles.class` vs. `styles['action-button']` depending on your situation. Use your best judgement.

### classnames helper
The `classNames` function takes any number of arguments which can be a string or object. The argument 'foo' is short for { foo: true }. If the value associated with a given key is falsy, that key won't be included in the output.

[See classnames github](https://github.com/JedWatson/classnames) .

```js
  classNames('foo', 'bar'); // => 'foo bar'
  classNames('foo', { bar: true }); // => 'foo bar'
  classNames({ 'foo-bar': true }); // => 'foo-bar'
  classNames({ 'foo-bar': false }); // => ''
  classNames({ foo: true }, { bar: true }); // => 'foo bar'
  classNames({ foo: true, bar: true }); // => 'foo bar'

  // lots of arguments of various types
  classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

  // other falsy values are just ignored
  classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```


### Example Component:

```js
import React from 'react';
import styles from '../path/simple_button.scss';

export default function simpleButton({ children }) {
  return (
    <button className={ styles.button }>{ children }</button>
  )
}
```
