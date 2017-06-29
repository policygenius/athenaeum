Contact Card example:

```example
    <ContactCard
      top={{
        text: 'Save my progress',
        icon: 'user',
        onClick: () => alert('top click')
      }}
      bottom={{
        text: 'Chat with an Expert',
        icon: 'chat',
        onClick: () => alert('top click')
      }}
    />
```

Inverted
```example
    <div style={{ backgroundColor: 'grey', padding: '10px' }}>
      <ContactCard
        inverted
        top={{
          text: 'Save my progress',
          icon: 'user',
          onClick: () => alert('top click')
        }}
        bottom={{
          text: 'Chat with an Expert',
          icon: 'chat',
          onClick: () => alert('top click')
        }}
      />
    </div>
```
