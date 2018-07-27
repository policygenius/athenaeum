### Accordion Example:

```jsx
<Accordion
  panels={[
  {
    title: 'Hey this is pretty great',
    body: '<p>This can be a string</p>',
  },
  {
    title: 'There is so much to say about this topichere is so much to say about this topic',
    body: '<p>This is one important paragraph</p><p>this is another</p><p>contentful is gonna pass in a bunch of wsigqy stuff</p>'
  },
  {
    title: 'And a third for good measure',
    body: '<p>Always a charm.</p>'
  },
  {
    title: 'Should work with html',
    body: `<div>
    <ul>
      <li>hello</li>
      <li>unordered</li>
      <li>list</li>
    </ul>
    </div>`
  },
  {
    title: 'testing prod content',
    body: `<p>
    <p>We’ve set a high bar to make Policygenius the only insurance site you’ll need. That means we:</p>
    <ul>
    <li>Offer all the top insurance companies so you don’t have to shop elsewhere</li>
    <li>Explain what you need to know in plain English so you don’t have to research elsewhere</li>
    </ul>

    <p>The insurance industry also hasn’t treated consumers well. This is how we’re different:</p>

    <ul>
    <li>We don’t require your contact info to get quotes. Unlike other sites, you can shop freely and anonymously here</li>
    <li>Our team of licensed experts focus on great advice, not pushy sales. They’re salaried, not commissioned, so they’re on your side</li>
    </ul>

    <p>Don’t just take our word for it. See what others are saying about their experience working with us by visiting <a target="_blank" href="https://www.trustpilot.com/review/policygenius.com">Policygenius reviews on Trustpilot</a>.</p>
    </p>
    `
    },
    {
      title: 'testing markdown',
      body: '# Hello\n\nMore content...\n\n**bold**\n\n_italics_'
    }
  ]}
/>
```
