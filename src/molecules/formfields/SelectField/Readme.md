Label Example:

    <SelectField
      label='Select Field Label'
      placeholder='Placeholder'
      selectOptions={[
        { value: 'Option 1' },
        { value: 'Option 2' },
        { value: 'Option 3' }
      ]}
      onChange={() => alert('Changing...')} />

No Label Example:

    <SelectField
      placeholder='Placeholder'
      selectOptions={[
        { value: 'Option 1' },
        { value: 'Option 2' },
        { value: 'Option 3' }
      ]}
      onChange={() => alert('Changing...')} />

Focused Example:

    <SelectField
      placeholder='Placeholder'
      label='Select Field'
      selectOptions={[
        { value: 'Option 1' },
        { value: 'Option 2' },
        { value: 'Option 3' }
      ]}
      onChange={() => alert('Changing...')} 
      focused />

Group Options Example:

NOTE: `selectOptions` array must contain objects structured as follows:

`{ group: 'groupName', options: [{value: 'optionName'}]}`.

    <SelectField
      placeholder='Placeholder'
      label='Select Field'
      selectOptions={[
       { group: 'Group 1', options: [{value: 'Option 1'}] },,
       { group: 'Group 2', options: [{value: 'Option 2'}] },,
       { group: 'Group 3', options: [{value: 'Option 3'}] },,
      ]}
      onChange={() => alert('Changing...')} />

Select Card Type Example:

    <SelectField
      type='select-card'
      label='Select Field Label'
      placeholder='Placeholder'
      selectOptions={[
        { value: 'Option 1' },
        { value: 'Option 2' },
        { value: 'Option 3' }
      ]}
      onChange={() => alert('Changing...')} />
