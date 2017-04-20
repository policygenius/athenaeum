# React Component Library (RCL)

React Component Library is a tool to help create and maintain robust design systems, allowing a developer to roll out higher quality, more consistent User Interfaces (UI) faster.
React Component Library borrows its fundamental design concepts & principles from [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/).

## The vision
RCL is a style guide for React components. It lists component `propTypes` and shows live, editable examples. You can use it to generate a static HTML page to share and publish or as a workbench for developing new components.

### Why is this useful?
* Provides a common library to compose new User Interface flows.
* Prevents 'reinventing of the wheel' syndrome.
* Avoids CSS entanglement.
* Because it's awesome.

### Potential Caveats
* Potential CSS Bloat (As it currently stands benefits outweigh the several bytes of text)

## How is this thing built? *(Under the hood)*
This style guide is built with javascript using primarily react, sass and webpack.

### Javascript
* [react-styleguidist](https://github.com/styleguidist/react-styleguidist)
* [react](https://github.com/facebook/react)
* [classnames](https://github.com/JedWatson/classnames)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://babeljs.io/)
* [yarn](https://github.com/yarnpkg/yarn)

### CSS
* [css-loader](https://github.com/webpack-contrib/css-loader) - Used in conjunction with webpack.   
** CSS Modules **
present a more sustainable way of building web interfaces without the worry and dread of CSS entanglement. It creates a unique name for each class name, allowing for prevention of collisions. The unique name is typically created in the following format: `fileName__className__uniqueId`. This unique name is not completely random, it provides relevant information (such as the file name) without extra work.  

* [sass]()   
* [autoprefixer](https://github.com/postcss/autoprefixer) - Write your CSS rules without vendor prefixes
