# Exploring CSS Modules with React

[More information on CSS Modules](https://github.com/css-modules/css-modules)

## Goal
To determine if CSS Modules is a viable, sustainable path for using and organizing CSS, particularly when used with React.

## Background
Currently, PG styleguide heavily utilizes Sass to organize CSS. Mixins, nested selectors and variables are used throughout the styleguide.

While Sass is very powerful, one of its main drawbacks is that all styles get put into a global namespace. The problem with this is that, in a large codebase, it is very easy to have naming and style collisions. This then leads to clunky, hyper-specific names as well as overrides to combat the global namespace.

PG has implemented conventions to circumnavigte the global namespace to decent results. There is, however, still issues of overriding styles and one change having larger repurcussions than was intended. This second point comes from the fact that all Sass files are imported into one main file and it is hard to trace where those styles are being used in the markup when developing.

## CSS Modules
CSS Modules present a new, and potentially more sustainable, way of building a stylguide (in particular with React).

With CSS Modules, there is no global namespace. When developing new CSS, those styles only exist within the context of the file they were created in. If you create a class with the same name in 2 different files, CSS Modules prevents those names from conflicting and their individual styles will be maintained.

This is achieved when the CSS is compiled. Using [`css-loader`](https://github.com/webpack-contrib/css-loader) in Webpack, CSS Modules creates a unique name for each class name, allowing for prevention of collisions. 

The unique name is typically created in the following format: `fileName__className__uniqueId`. As you can see, this unique name is not completely random; in fact, it actually provides more relevant information (such as the file name) without the developer doing any extra work.

With this power, we can modularize our CSS even further than with Sass.

For example, in the styleguide we have a number of different buttons and all of the styles for each of those buttons lives in one stylesheet. We use nested selectors to help with organizing our code and making it DRY. With CSS modules, each of these buttons can live in their separate file and utilize the same class names. 

Take our [simple button](https://styles.policygenius.com/latest/styleguide/components_-_buttons.html) and [info button](https://styles.policygenius.com/latest/styleguide/components_-_buttons.html). We can create the files `simple_button.scss` and `info_button.scss` to hold each one's styles. In those files, we can individually style a `button` class specific to the type of button. Then, when we use those styles, CSS Modules will create namespaced class names `simpleButton__button__id` and `infoButton__button_id`, preventing any confusion.

Taking this even further, when we import these button styles into a component, the syntax is very specific. Just as you would import a child component into a parent, you do the same with CSS Module files.

With our example above, if I wanted to use the simple button, I would write something like this:

```js
import React from 'react';
import simpleButton from '../path/simple_button.scss';

export default function simpleButton({children}) {
  return (
    <button className={simpleButton.button}>{children}</button>
  )
}
```

In our React code, we can give the imported styles a particular name and simply access the desired class names (in this case, `button`) from that.

With CSS Modules, we can modularize our CSS into specific files and use built in 'name spacing' to avoid class name collision and never worry about overridiing styles code.

## Possible Global Namespace?
One downside I see to CSS Modules is the ability to share variables across files. CSS Modules has a way to share styles across files (using the `composes` function), but if we wanted to create a master variables file for colors or breakpoints, CSS Modules doesn't seem to have a great way for handling that.

We can use another tool, [post css modules values](https://github.com/css-modules/postcss-modules-values) to help with that.

What this allows us to do is create values that are able to be accessed globally. We simply create an `@value` in one file and then import it into another file and use the value just like a Sass variable.

This approach would help cut down the refactoring needed for our variable library.

## Downsides for PG
The major downside to CSS Modules is the work needed to import our current styleguide codebase to the conventions of CSS Modules. We would need to rewrite/rethink a lot of our Sass and how we can better modularize it and/or transition it into plain CSS. It is my understanding that CSS Modules discourages nested selectors, so a lot of work would be needed to undo that from our current styleguide.

In addition, we would need to rewrite our variable files and rewrite how we import then into the necessary files.



