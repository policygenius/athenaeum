# Athenaeum - A React Component Library (RCL)

##Table of Contents

  - [Purpose](#purpose)
  - [Install the NPM package](#install-the-npm-package)
  - [Using the RCL locally](#using-the-rcl-locally)
    - [Development with another project locally](#development-with-another-project-locally)
  - [Using an RCL component](#using-an-rcl-component)
  - [Running tests](#running-tests)
  - [Finding your way around](#finding-your-way-around)
  - [Adding New Icons](#adding-new-icons)
  - [Contributing](#contributing)
    - [Code reviews](#code-reviews)

## Purpose

The RCL is a tool to help create and maintain robust design systems, allowing a developer to roll out higher quality, more consistent User Interfaces (UI) faster.

To see it in action, visit:
http://rcl.policygenius.com/latest/index.html

The RCL relies heavily on the following technologies. If you want to learn more about them and how to customize/configure the RCL, take a look at the documentation:

* [React](https://facebook.github.io/react/)
* [Styleguidist](https://github.com/styleguidist/react-styleguidist)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [Post CSS](http://postcss.org/)
* [Sass](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)

We use [Babel](https://babeljs.io/) to compile our JS, which allows us to use the latest features of the language.


## Install the NPM package

The RCL is published as a package called "Athenaeum", which can be found [here](https://www.npmjs.com/package/athenaeum).

Install the package in your project with the package manager of your choice:

- `yarn add athenaeum`
- `npm install athenaeum`


## Using the RCL locally
1. Clone the repo:

  ```
    git clone git@github.com:policygenius/athenaeum.git
  ```

2. Install dependencies:

  ```
    yarn
  ```

3. Start the server:

  ```
    yarn start
  ```

4. Visit `http://localhost:6060` to view


### Development with another project locally

If you want to work on the RCL and another repo simultaneously, you can [symlink](https://yarnpkg.com/lang/en/docs/cli/link/) to Athenaeum from the repo you are working in.

1. In your `athenaeum` repo, run:

  ```
    yarn link && yarn build:publish:watch
  ```
2. In the repo you are working in, run:

  ```
    yarn link 'athenaeum'
  ```

3. When you are finished, in the repo you are working in, run:

  ```
    yarn unlink 'athenaeum' && yarn
  ```

4. In your `athenaeum` repo, run:

  ```
    yarn unlink
  ```

## Using an RCL component

RCL components are React components, which are exported as a collection of modules you can import/require like you would any other JS dependency:

e.g.


```html
import { TextComponent, Button, Layout, Col } from 'athenaeum';

function MyReactComponent( props ) {
return (
  <div>
    <Layout>
      <TextComponent type={6}>I am a header!</TextComponent>
      <Col>
        I am a column!
      </Col>
      <Button>Submit!</Button>
    </Layout>
  </div>
  )
}

export default MyReactComponent;
```

The RCL gets exported with a bundled JS file and a CSS file. To use the RCL stylesheet, you can either import them directly into your project:

`import 'athenaeum/lib/assets/styles.css';`

**OR** simply link to the latest version of the styles in your HTML:

`<link href="http://rcl.policygenius.com/{{v5.5.2 or latest version}}/assets/styles.css" rel="stylesheet">`


## Running tests
_Note: Test will be run automatically as part of a githook on `git push`_

`yarn test`

OR

`yarn test [filepath]`

The RCL uses the following for testing. If you want to learn more about them and how to customize/configure the RCL, take a look at the documentation:

* [Jest](https://facebook.github.io/jest/)
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)


## Finding your way around

```html
/src
- atoms (Buttons, Icons, Text, etc.)
- molecules (Form Fields, Lists, Image Asides, etc.)
- organisms (Forms, Tables, etc.)
- templates (Headers, Navigators, Footers, etc.)
```

Our RCL is structured around the concepts put forth by [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). The smallest components are **ATOMS**, which are used to make **MOLECULES**, which are used to make **ORGANISMS**, which are lastly used to make **TEMPLATES**.

## Adding New Icons

Upload the icons to our Google Cloud Bucket:

1. gzip the svg
  - `gzip -9 -S 'z' newIcon.svg`
2. Upload `newIcon.svgz`
  - `gsutil -h "Content-Encoding:gzip" -h "Content-Type:image/svg+xml" -h "Cache-Control:public,max-age=31536000" cp newIcon.svgz gs://pg-static-assets/svgs/newIcon.svgz`

Add icon name to the list of possible icon values:

1. Open `src/atoms/Icon/constants.js`
2. Add the name of your icon in alphabetical order

## Contributing

For more information on Contributing and issues, please view the [`athenaeum` Github wiki](https://github.com/policygenius/athenaeum/wiki).

***

The RCL and the Athenaeum project is a product by [PolicyGenius](https://www.policygenius.com/).
