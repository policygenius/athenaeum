### MobileMenu Example:

```jsx
    <MobileMenu
      tabs={[
        { icon: 'phone', text: 'Expert Help', active: state.activeTab === 1 || !state.activeTab, key: 1 },
        { icon: 'user', text: 'Save My Progress', active: state.activeTab === 2, key: 2 }
      ]}
      onClick={(key) => setState({ activeTab: key })}
    />
```
