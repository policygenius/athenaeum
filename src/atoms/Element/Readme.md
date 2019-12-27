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

```jsx
  <div>
    <Element tag='h1' color='accent-3' typography={3}>h1 tags here.</Element>
    <Element tag='p' color='neutral-4' spacer={12} typography={7}>custom p tag.</Element>

    <Element tag='h3' typography={5} weight='light'>There was a
      <Element tag='u'>spacer</Element> set above me
    </Element>
  </div>
```

```jsx
  // If you use the Elemental module, you can write familiar semantic Html.
  // The above example would be written as:
  <div>
    <h1 color='accent-3' typography={3}>h1 tags here.</h1>
    <p color='neutral-4' spacer={12} typography={7}>custom p tag.</p>

    <h3 typography={5} weight='light'>
      There was a <u>spacer</u> set above me.
    </h3>
  </div>
```


# Elementals

Elemental was a helper module to expose commonly used HTML tags wrapped as an `<Element />`,
however it's been deprecated due to compiling errors. Last working version: 5.26.2.
