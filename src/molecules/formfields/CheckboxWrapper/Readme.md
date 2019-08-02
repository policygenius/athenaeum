Checkbox List Example:

```jsx
  <CheckboxWrapper
    label='Pellentesque habitant'
    tooltip="I'm a tooltip!"
    subLabel='Test sublabel'
    input={{
      onBlur: () => true,
      onFocus: () => true,
    }}
    meta={{}}
  >
    <CheckBoxField
      input={{
        name: 'extinguisher'
      }}
      label='Fire extinguisher'
    />
    <CheckBoxField
      input={{
        name: 'localFireAlarm'
      }}
      label='Local fire/smoke alarm (sounds in home)'
    />
    <CheckBoxField
      input={{
        name: 'centralFireAlarm'
      }}
      label='Central fire/smoke alarm (alerts monitoring system)'
    />
    <CheckBoxField
      input={{
        name: 'automaticSprinklersAll'
      }}
      label='Automatic sprinklers in all rooms (including closets)'
    />
    <CheckBoxField
      input={{
        name: 'automaticSprinklersSome'
      }}
      label='Automatic sprinklers in some rooms'
    />
  </CheckboxWrapper>
```

Checkbox List w/Footer Example:

```jsx
  <CheckboxWrapper
    label='Pellentesque habitant'
    tooltip="I'm a tooltip!"
    subLabel='Test sublabel'
    footerBox={
      <CheckBoxField
        input={{
          name: 'none',
        }}
        label='None of the above'
      />
    }
    input={{
      onBlur: () => true,
      onFocus: () => true,
    }}
    meta={{}}
  >
    <CheckBoxField
      input={{
        name: 'burgers',
      }}
      label='Burgers'
    />
    <CheckBoxField
      input={{
        name: 'dogs',
      }}
      label='Hot Dogs'
    />
    <CheckBoxField
      input={{
        name: 'fries',
      }}
      label='French Fries'
    />
    <CheckBoxField
      input={{
        name: 'shake',
      }}
      label='Milkshake'
    />
    <CheckBoxField
      input={{
        name: 'pop',
      }}
      label='Soda Pop'
    />
  </CheckboxWrapper>
```
