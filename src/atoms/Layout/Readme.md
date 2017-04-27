Layout is broken out into a 12 column grid of `Col`s.

Shorthand option:
You don't have to explicitly wrap each child in a `Col`. All children of `Layout` will get wrapped in `Col` automatically.
Any layout specific props that are meant for the `Col` will be passed to the `Col` wrapper accordingly and will override any props that may have been given it by the `Layout` component. All child component props will stay with the component itself.


## How to use Layout
```html
  // Bad (don't pass props that don't exist.)
  <Layout smallCols={[ 6 ]}>
    <Button variant='info'>I am button</Button>
    <Button variant='outline' smallCols={3}>some button</Button>
  </Layout>

  // Good
  <Layout smallCols={[ 6 ]}>
    <Button variant='info'>I am button</Button>
    <Button variant='outline'>some button</Button>
  </Layout>

  // Good
  <Layout smallCols={[ 6 ]}>
    <Button variant='info'>I am button</Button>
    <Col smallCols={3}>
      <Button variant='outline'>some button</Button>
    </Col>
  </Layout>
```


## Mixed Layout Examples with Shorthand, Cols, children, and Overrides:

```example
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles.example}>
      <Layout
        smallCols={[ 6 ]}
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div />

        <Col smallCols={3}>
          <div style={{ background: 'red', margin: '10px' }}> Some child</div>
        </Col>

        <Col smallCols={2} style={{ alignSelf: 'flex-end' }} />

        <Col smallCols={3}>
          <Button variant='info'>I am button</Button>
        </Col>

        <Button variant='outline'>some button</Button>


        <Col style={{ padding: '30px' }}>
          <Button variant='info'>I am also button</Button>
        </Col>

      </Layout>
    </div>
```

## Small 2 Col, Medium 3 Col Grid Example:


```example
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles.example}>
      <Layout
        smallCols={[ 6 ]}
        mediumCols={[ 4 ]}
      >
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Layout>
    </div>
```

## Nested Grid Example:

```example
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles.example}>
      <Layout
        smallCols={[ 3 ]}
      >

        <Col smallCols={7}>
          <Layout smallCols={[ 4 ]}>
            <div> col 2 </div>
            <div> col 2 </div>
            <div> col 2 </div>
          </Layout>
        </Col>

        <Col smallCols={5}> col 1 </Col>

        <Col smallCols={5}> col 1 </Col>

        <Col smallCols={7} fullwidth>
          <Layout smallCols={[ 4 ]} fullwidth>
            <div> col 2 </div>
            <div> col 2 </div>
            <div> col 2 </div>
          </Layout>
        </Col>

        <div> col 1 </div>
        <div> col 1 </div>
        <div> col 1 </div>
        <div> col 1 </div>
        <div> col 1 </div>

      </Layout>
    </div>
```
