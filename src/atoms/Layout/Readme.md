Layout is broken out into a 12 column grid of `Col`s:
- Except for `Col` components, all children of `Layout` get wrapped in `Col` automatically
- Any child props that match a `Col` prop will be passed to the `Col` wrapper accordingly.
- These props will override any props the `Col` might have inherited from `Layout`.

## Mixed Layout Examples with Overrides:

```example
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles.example}>
     <Layout
       smallCols={[ 6 ]}
       style={{ justifyContent: 'space-between', alignItems: 'center' }}
     >
       <div />
       <Col>Naked Col</Col>
       <div smallCols={2} colStyle={{ alignSelf: 'flex-end' }} />
       <Button variant='info' smallCols={3} colStyle={{ backgroundColor: 'green', padding: '1rem' }}>I am button</Button>
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
