# Athenaeum - A React Component Library (RCL)

The RCL is a tool to help create and maintain robust design systems, allowing a developer to roll out higher quality, more consistent User Interfaces (UI) faster.

To see it in action, visit:
http://rcl.policygenius.com/v4.1.2/index.html

The RCL relies heavily on the following technologies. If you want to learn more about them and how to customize/configure the RCL, take a look at the documentation:

* [React](https://facebook.github.io/react/)
* [Styleguidist](https://github.com/styleguidist/react-styleguidist)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [Post CSS](http://postcss.org/)
* [Sass](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)

We use [Babel](https://babeljs.io/) to compile our JS, which allows us to use the latest features of the language.


## Using the RCL locally
1. Clone the repo:

  `git clone git@github.com:policygenius/athenaeum.git`

2. Install dependencies

  `yarn`

3. Start the server

  `yarn start`

4. If you want to work on the RCL and another repo simultaneously, [symlink](https://yarnpkg.com/lang/en/docs/cli/link/) to Athenaeum while continuously watching and building to the `lib` directory, which is what is used to publish the package to npm:

  `yarn link && yarn build:publish:watch`

  and in your other repo:

  `yarn link 'athenaeum'`

5. Rebuild your dependencies,
  `yarn run reset`

## Using the NPM package

The RCL is published as a package called "Athenaeum", which can be found [here](https://www.npmjs.com/package/athenaeum).

Installing the package:

  `yarn add athenaeum` or `npm install athenaeum`


## Using an RCL component:

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

## Static Components
Static components are ones that are completely self contained, displaying a finite amount of data and will rarely, if ever, take in props. These components are static in the sense that they will never change, no matter the context. They are not dynamic and do not mold to the environment they are placed. They are packaged up and come as is.

While this may seem counterintuitive to what the RCL is trying to achieve, these static components will prove incredible useful as PolicyGenius moves to a full React environment. By utilizing the power of RCL components, Static components can be built with minimal dependency weight and be exported as static assets as well as part of the NPM package, giving PolicyGenius a couple of options to leverage them. In an effort to improve overall page speed for the PolicyGenius blog, the first of these components to be included in the RCL is the MainNav.

### How main nav is being consumed
![main nav](main_nav.png)

### Serving Static components
Since the MainNav is the only static component, the command is simply:

1. `yarn nav`

2. Navigate to `localhost:8080`

To fetch blog posts locally, you will need to include the following keys in your `env`:
- `GHOST_API_URL`
- `GHOST_API_CLIENT_SECRET`

### Building Static components
Build bundled JS / assets for MainNav:

`yarn build:nav:bundle`

Build static HTML for MainNav:

`yarn build:nav:static && yarn build:nav:html`

Build MainNav for publishing:

`yarn build:nav:publish`

### Organization
All Static components should live in `src/static/NameOfStaticComponent`. A typical folder structure would look like:

```html
/src
  /static
    /StaticComponent
      /index.js
      /data/
      /static_component.module.scss
      /StaticComponentChild1/
      /StaticComponentChild2/
```

### Static data
In order to build up these Static components with all of the data needed to make them self contained, each Static component should have an accompanying `data` folder that will house all of this information. The data should be written in JSON format and included in the entry point for the Static component or whichever child component needs the data/is most appropriate.

For an example, navigate to `src/static/MainNav/data`. As you will see, the data is broken up into subfolders and further into individual files of JSON.

This data section will help to consolidate static information in a place where product managers can easily make changes to copy and see those changes reflected everywhere on deploy. We want to decrease the amount of time engineers spend updating copy in HTML/JSX and offload that to the stakeholders who have the most context on what copy needs to be changed.

### Best Practices
When developing Static components, follow all of the best practices for the RCL.


## Finding your way around

```html
/src
- atoms (Buttons, Icons, Text, etc.)
- molecules (Form Fields, Lists, Image Asides, etc.)
- organisms (Forms, Tables, etc.)
- static (Main Nav)
- templates (Headers, Navigators, Footers, etc.)
```

Our RCL is structured around the concepts put forth by [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). The smallest components are **ATOMS**, which are used to make **MOLECULES**, which are used to make **ORGANISMS**, which are lastly used to make **TEMPLATES**.


## Contributing

### Gotchas:

#### SCSS / CSS and How our CSS-Module config works

- Our CSS Module config creates complex, hashed classes like this: `animate-module__shake--3Q0r1` which is `[name of the component]__[local classname]--[hash:base64:5]'`.
- When webpack comes across an imported SCSS (`import styles from './button.module.scss'`), a new class is created name-spaced with the directory from where that file exists and added to the file css output file.
- That `import styles..` will return a "styles" object of key / value pairs in this format: `{ "plain classname": "complex hashed classname" }`
- You can then add classes to your JSX thus: `className: styles['classname']`

**To prevent a bloated final CSS file, DON'T use the `@import` to import scss files that contain CSS selectors. `%placeholders`, `@mixin`, `@function`s are OK.**


### Coding styles and standards

Most of our styles are enforced by linters ([stylelint](https://github.com/stylelint/stylelint), [eslint](http://eslint.org/), [eslint-plugin-markdown](https://github.com/jmcolella/eslint-plugin-markdown)), which must follow for the builds to pass.

For anything not specifically addressed in the linters, use Airbnb's styleguides:

- [JS](https://github.com/airbnb/javascript)
- [React/JSX](https://github.com/airbnb/javascript/tree/master/react)
- [CSS](https://github.com/airbnb/css)

### Continuous Integration and Deployment

We use [Buildkite](https://buildkite.com/policygenius) as a CI server. Every commit triggers a build with Buildkite that will run a series of checks and tests before giving a green light to merge to master.

There is 1 pipelines associated with this project:

[athenaeum pipeline](https://buildkite.com/policygenius/athenaeum) - builds the project, runs test. When a branch is then merged to master, a new build is triggered. After a build on master passes all of its, it will need to be manually unblocked before being deployed to production and published to npm. This manual unblock is a prompt requiring you to bump the package version, for which we use [Semantic Versioning](http://semver.org/).

### Code reviews

Your branch code should always be reviewed before it gets merged to `master`. **Do not work on the `master` branch.**

[Here's a nice guide on how to Code Review.](https://github.com/thoughtbot/guides/tree/master/code-review#code-review)

***

The RCL and the Athenaeum project is a product by [PolicyGenius](https://www.policygenius.com/).
