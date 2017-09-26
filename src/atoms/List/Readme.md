This component can either wrap around any `children` that you want to turn into a list, or take an array of `listItems`, or both.
If you pass in both `children` and `listItems`, the `listItems` will extend the list create from the `children` as new `<li>`.

### List Example:

Passing list items in as children:
```jsx
    <List>
      <strong>New Component Created!</strong>
      <small>Now go and write some code! -- <em>You code monkey, you ;).</em></small>
      <List>
        I'm nested!!
        <li>I'm wrapped in a 'li'</li>
      </List>
    </List>
```

Using the listItems prop directly:
```jsx
    <List
      listItems={[
        <strong>Hope</strong>,
        'Love',
        <List><em>Peace</em></List>,
        <Icon icon='health' height='10px' width='20px' />
      ]}
    />
```

Condensed example:
```jsx
    <List
      condensed
      listItems={[
        <strong>Hope</strong>,
        'Love',
        <em>Peace</em>,
        <Icon icon='health' height='10px' width='20px' />
      ]}
    />
```

Multiple column example:
```jsx
    <List
      condensed
      columns={3}
      listItems={[
        <strong>Hope</strong>,
        'Love',
        <em>Peace</em>,
        <Icon icon='health' height='10px' width='20px' />,
        <strong>Hope</strong>,
        'Love',
        <em>Peace</em>,
        <Icon icon='health' height='10px' width='20px' />,
        <strong>Hope</strong>,
        'Love',
        <em>Peace</em>,
        <Icon icon='health' height='10px' width='20px' />,
      ]}
    />
```

Numbered example:
```jsx
    <List
      numberedList
      listItems={[
        <strong>Hope</strong>,
        'Love',
        <em>Peace</em>,
        <Icon icon='health' height='10px' width='20px' />
      ]}
    />
```
