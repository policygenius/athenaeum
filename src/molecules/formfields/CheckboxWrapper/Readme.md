Checkbox List Example:

```example    
  const CheckboxField = require('../CheckboxField').default;

  <CheckboxWrapper label='Pellentesque habitant'>
    <CheckboxField
      input={{
        name: 'extinguisher'
      }}
      label='Fire extinguisher'
    />
    <CheckboxField
      input={{
        name: 'localFireAlarm'
      }}
      label='Local fire/smoke alarm (sounds in home)'
    />
    <CheckboxField
      input={{
        name: 'centralFireAlarm'
      }}
      label='Central fire/smoke alarm (alerts monitoring system)'
    />
    <CheckboxField
      input={{
        name: 'automaticSprinklersAll'
      }}
      label='Automatic sprinklers in all rooms (including closets)'
    />
    <CheckboxField
      input={{
        name: 'automaticSprinklersSome'
      }}
      label='Automatic sprinklers in some rooms'
    />
  </CheckboxWrapper>
```
