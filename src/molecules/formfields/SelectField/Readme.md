Label Example:

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
    <SelectFieldExample
      label="Select Field Label"
      placeholder="Placeholder"
      tooltip="Here's a tip: You're awesome ;)"
    />

No Label Example:

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
    <SelectFieldExample
      placeholder="Placeholder"
    />

Focused Example:

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
    <SelectFieldExample
      placeholder='Placholder'
      label='Select Field'
      focused
    />

Group Options Example:

NOTE: `selectOptions` array must contain objects structured as follows:

`{ group: 'groupName', options: [{label: 'optionName', value: 1}]}`.

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
    <SelectFieldExample
      placeholder='Placeholder'
      label='Select Field'
      selectOptions={[
       { group: 'Group 1', options: [{label: 'Option 1', value: 1}] },,
       { group: 'Group 2', options: [{label: 'Option 2', value: 2}] },,
       { group: 'Group 3', options: [{label: 'Option 3', value: 3}] },,
      ]}
    />

Select Card Type Example:

    const SelectFieldExample = require('utils/example_wrappers/SelectFieldExample').default;
    <SelectFieldExample
      type='select-card'
      label='Select Field Label'
      placeholder='Placeholder'
    />

