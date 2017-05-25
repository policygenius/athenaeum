## What is an Element?
An atomic element is a component which gives you access to standardized color, spacing, typography and font-weight as a component property. This allows you to compose new components with semantic HTML while adhering to the standard/branding of the RCL.

An atomic element will reset it's styled margins, font-size and color.

```css
  .element {
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
    color: color('neutral-2');
  }
```

### Element example:

```example
  <div>
    <Element tag='h1' color='accent-3' typography={3}>h1 tags here.</Element>
    <Element tag='p' color='neutral-4' spacer={12} typography={7}>custom p tag.</Element>

    <Element tag='h3' typography={5} weight='light'>There was a
    <Element tag='u'>spacer</Element> set above me</Element>
  </div>
```

```js
  // If you use the Elemental module, you can write familiar semantic Html.
  // The above example would be written as:
  <div>
    <H1 color='accent-3' typography={3}>h1 tags here.</H1>
    <P color='neutral-4' spacer={12} typography={7}>custom p tag.</P>

    <H3 typography={5} weight='light'>
      There was a <U>spacer</U> set above me.
    </H3>
  </div>
```

# Elementals

Elemental is a helper module that exposes commonly used HTML tags wrapped as an `<Element />`. This allows you to apply standardized spacing, typography and colors to any component/text/element.

```js
  import { Div, H1, P, Span } from 'atoms/Elementals';

  const ExampleA = () =>
    <Div>
      <H1 spacer={3} color='brand-1'>Colored Title</H1>
      <P>A paragraph <Span color='neutral-3'>Fit for a king</Span></P>
    </Div>;
```

## Available methods:
`HtmlElements()`

Returns an object that has all the available html tags as its keys. The keys are all capitalized and return a wrapped `<Element tag={key} />` for that particular tag.
```js
  import { HtmlElements } from 'atoms/Elementals';

  const tags = HtmlElements();

  /* what HtmlElements() returns:
    {
      A: (props) => <A {...props} />
      Abbr: (props) => <Abbr {...props} />
      ...otherTags
      Table: (props) => <Table {...props} />
    }
  */
```

`styled(string)`

Returns an `<Element />` with the passed in string argument as its tag. You can pass in an HTML tag name or custom name.
```js
  const NewComponent = styled('NewComponent'); // returns <Element tag='NewComponent />

  <NewComponent type={3} spacer={5} />
```

`Available HTML Tags`

This module includes commonly used HTML tags. Note that the first letter is capitalized.
```html
  Div, Img, H1, H2, H3, H4, H5, H6,
  A, P, S, B, U, Em, Pre, Span, Strong,
  Small, Sub, Sup, Ul, Ol, Li,
```
To use dom element that are not included with this module. You can create styled tags by using the `styled()` method.

`const Acronym = styled('acronym');`

or you can extract tags you want to use using `HtmlElements()`.

`const { Acronym, Table } = HtmlElements();`
