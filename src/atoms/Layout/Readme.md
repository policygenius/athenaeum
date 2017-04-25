Layout is broken out into a 12 column grid of `Col`s.

Shorthand option:
You don't have to explicitly wrap each child in a `Col`. All children of `Layout` will get wrapped in `Col` automatically.
Any layout specific props that are meant for the `Col` will be passed to the `Col` wrapper accordingly and will override any props that may have been given it by the `Layout` component. All child component props will stay with the component itself.

Please see the example below:

## Mixed Layout Examples with Shorthand, Cols, children, and Overrides:

```example
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles.example}>
      <Layout
        smallCols={[ 6 ]}
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div />

        <Col smallCols={[ 3 ]}>
          <div style={{ background: 'red', margin: '10px' }} smallCols={[ 1 ]}> Some child</div>
        </Col>

        <Col smallCols={2} style={{ alignSelf: 'flex-end' }} />

        <Button variant='info' smallCols={3}>I am button</Button>

        <Col style={{ padding: '30px' }}>
          <Button variant='info' smallCols={3}>I am also button</Button>
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

        <div smallCols={7}>
          <Layout smallCols={[ 4 ]}>
            <div> col 2 </div>
            <div> col 2 </div>
            <div> col 2 </div>
          </Layout>
        </div>
        <div smallCols={5}> col 1 </div>

        <div smallCols={5}> col 1 </div>
        <div smallCols={7} fullwidth>
          <Layout smallCols={[ 4 ]} fullwidth>
            <div> col 2 </div>
            <div> col 2 </div>
            <div> col 2 </div>
          </Layout>
        </div>

        <div> col 1 </div>
        <div> col 1 </div>
        <div> col 1 </div>
        <div> col 1 </div>
        <div> col 1 </div>

      </Layout>
    </div>
```
