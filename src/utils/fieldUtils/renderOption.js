import React from 'react';
import renderOptGroup from 'utils/fieldUtils/renderOptGroup';

import styles from 'molecules/formfields/shared/formfields.module.scss';

const randomStr = () => Math.random().toString(36).substring(7);

export default function renderOption(opt, idx = 0) {
  if (opt.group) return renderOptGroup(opt, idx);

  const {
    reactKey,
    value,
    label,
    selected,
  } = opt;
  const selectedOption = selected ? { selected: 'selected' } : {};


  return (
    <option
      key={reactKey ? `${reactKey}-${idx}` : `opt-${randomStr()}`}
      value={value}
      className={styles['option']}
      { ...selectedOption }
    >
      { label }
    </option>
  );
}
