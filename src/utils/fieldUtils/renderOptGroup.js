import React from 'react';
import renderOption from 'utils/fieldUtils/renderOption';

const randomStr = () => Math.random().toString(36).substring(7);

function renderOptions(options) {
  if (!options) return null;

  return options.map(renderOption);
}

export default function renderOptGroup(optionGroup, idx = 0) {
  const {
    reactKey,
    group,
    options,
  } = optionGroup;

  return (
    <optgroup
      key={reactKey ? `${reactKey}-${idx}` : `grp-${randomStr()}`}
      label={group}
    >
      { renderOptions(options) }
    </optgroup>
  );
}
