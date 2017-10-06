import React from 'react';
import renderOption from 'utils/fieldUtils/renderOption';

function renderOptions(options) {
  if (!options) return null;

  return options.map(renderOption);
}

export default function renderOptGroup(optionGroup, idx) {
  const {
    reactKey,
    group,
    options,
  } = optionGroup;

  return (
    <optgroup
      key={reactKey ? `${reactKey}-${idx}` : idx.toString()}
      label={group}
    >
      { renderOptions(options) }
    </optgroup>
  );
}
