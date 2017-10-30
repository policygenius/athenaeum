Add Card Examples:

```jsx
    <Layout
      bottomSpacing={'small'}
    >
      <AddCard icon='plus' cardText='Add person to policy' onClick={() => alert('Clicked')} />
      <AddCard icon='jewelry' cardText='Add jewelry' onClick={() => alert('Clicked')} />
      <AddCard icon='firearm' cardText='Wont work' onClick={() => alert('bang')} disabled />
    </Layout>
```
