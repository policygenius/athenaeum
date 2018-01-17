Layout is broken out into a 12 column grid of `Col`s.

Shorthand option:
You don't have to explicitly wrap each child in a `Col`. All children of `Layout` will get wrapped in `Col` automatically.
Any layout specific props that are meant for the `Col` will be passed to the `Col` wrapper accordingly.
Any props that you explicitly give to a `<Col>` will override any props that it may have inherited by the `Layout` component.
All child component props will be passed directly to the component itself.


## How to use Layout
```html
  // Bad (don't pass `<Col>` props directly to children.)
  // This will work, but it's considered bad practice.
  <Layout smallCols={[ 6 ]}>
    <Button variant='info'>I am button</Button>
    <Button variant='outline' mediumCols={3}>some button</Button>
  </Layout>

  // Good
  <Layout>
    <Button variant='info'>I am button</Button>
    <Col smallCols={3}>
      <Button variant='outline'>some button</Button>
    </Col>
  </Layout>

  // Good
  <Layout smallCols={[ 6 ]}>
    <Button variant='info'>I am button</Button>
    <Button variant='outline'>some button</Button>
  </Layout>
```


## Mixed Layout Examples with Shorthand, Cols, children, and Overrides:

```jsx
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles['example']}>
      <Layout
        padding
        fullwidth
        smallCols={[ 6 ]}
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div />

        <Col smallCols={3} padding>
          <div style={{ background: 'red', margin: '10px' }}> Some child</div>
        </Col>

        <Col smallCols={2} style={{ alignSelf: 'flex-end' }} />

        <Col smallCols={3} padding>
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


```jsx
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles['example']}>
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

## Layout with GrayBox background Example:


```jsx
    <div>
      <Layout
        smallCols={[ 6 ]}
        mediumCols={[ 8, 2 ]}
        style={{ position: 'relative' }}
      >
        <GrayBox
          offset={2}
          style={{ zIndex: 1 }}
        />
        <Col
          offset={5}
          style={{ zIndex: 1 }}
        >
          <Text variant='label'>
            supertitle
          </Text>
          <Text tag='h2' font='a' size={2}>
            title
          </Text>
          <Text font='b' size={9}>
            description
          </Text>
        </Col>
      </Layout>
    </div>
```

## Layout with GrayBox background Example 2:


```jsx
    <div>
      <Layout
        smallCols={[ 6 ]}
        mediumCols={[ 3 ]}
        style={{ position: 'relative' }}
      >
        <GrayBox
          offset={2}
          mediumCols={9}
          style={{ zIndex: 1 }}
        />
        <Col
          offset={1}
          style={{ zIndex: 1 }}
        >
          <CompanyCard
            starRating={5}
            imageAttr={{
              src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
            }}
            variant='small'
          />
        </Col>
        <Col
          style={{ zIndex: 1 }}
        >
          <CompanyCard
            starRating={5}
            imageAttr={{
              src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
            }}
            variant='small'
          />
        </Col>
        <Col
          style={{ zIndex: 1 }}
        >
          <CompanyCard
            starRating={5}
            imageAttr={{
              src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
            }}
            variant='small'
          />
        </Col>
      </Layout>
    </div>
```
## Nested Grid Example:

```jsx
    const exampleStyles = require('./example.module.scss');

    <div className={exampleStyles['example']}>
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

## Special Variants
### `'bordered-buckets'`

```jsx
<Layout variant='bordered-buckets' mediumCols={[ 'auto' ]} flex>
  <div>'Child 1'</div>
  <div>'Child 2'</div>
  <div>'Child 3'</div>
  <div>'Child 4'</div>
  <div>'Child 5'</div>
</Layout>
```

