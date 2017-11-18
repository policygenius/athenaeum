Footer Example:

```jsx
    <div>
      <Footer
        phoneNumber='1 (855) 695-2255'
        links={[
          { text: 'Security & Trust', href: '#trust' },
          { text: 'Privacy', href: '#privacy' },
          { text: 'Terms of Services', href: '#terms' },
        ]}
        onClickChat={() => alert('hi')}
        hours={
          [
            'Monday-Thursday | 9am-8pm EST',
            'Friday | 9am-6pm EST'
          ]
        }
      >
      </Footer>
    </div>
```
