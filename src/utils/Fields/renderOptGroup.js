import React from 'react';

export default function renderOptGroup( opt, idx, optStyles ) {
  return (
    <optgroup
      key={`optgroup-${idx}`}
      label={opt.group}
    >
      {
        opt.options.map( (sub, i) =>
          <option
            key={`optgroup-${idx}-option-${i}`}
            value={sub.value}
            className={optStyles}
          >
            { sub.value }
          </option>
          )
      }
    </optgroup>
  );
}
