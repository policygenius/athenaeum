RadioCard Example:

```example
    <RadioCard
      input={{
        name: 'radio_test',
        value: 'Choice',
      }}
      label='Donec lobortis dui'
      description='Sed lobortis et quam at rhoncus'
      image='https://styles.policygenius.com/23.2.0/styleguide/images/Apply-online.png'
    />
```


```example
    <RadioCard
      input={{
        name: 'radio_test',
        value: 'No Choice',
      }}
      label='Donec lobortis dui'
      description='Sed lobortis et quam at rhoncus'
      sections={[
        { label: 'Such label', value: '$100' },
        { label: 'much text', value: '$20' }
      ]}
    />
```
