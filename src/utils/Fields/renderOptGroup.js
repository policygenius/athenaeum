import React from 'react';

export default function renderOptGroup( opt, optStyles ) {
  return (
    <optgroup
      label={ opt.group }>
      {
        opt.options.map( ( sub, idx ) => {
          return (
            <option
              key={ 'selectfield-option-' + idx }
              value={ sub.value }
              className={ optStyles }
            >
              { sub.value }
            </option>
          )
        })
      }
    </optgroup>
  )
}
