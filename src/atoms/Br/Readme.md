## What is the `<Br />` tag?
`<Br />` is a `<span />` that acts like a line-break to allow line-breaking based on media query sizes.

Example:
`<Br small large ... />`

### Br Example:
```jsx
  <div>
    <h2>I break on ↵<Br large />large.</h2>
    <h2>I break on ↵<Br small medium large />medium large.</h2>
    <h3>I break only on ↵<Br medium />medium.</h3>
    <h3>I break on ↵<Br medium small />medium & small.</h3>

    <h5>I break only on ↵<Br small />small</h5>

  </div>
```
