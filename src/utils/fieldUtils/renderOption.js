import React from 'react';
import renderOptGroup from 'utils/fieldUtils/renderOptGroup';

import styles from 'molecules/formfields/shared/formfields.module.scss';

export default function renderOption(opt, idx) {
  if (opt.group) return renderOptGroup(opt, idx);

  const {
    reactKey,
    value,
    label,
  } = opt;

  return (
    <option
      key={reactKey ? `${reactKey}-${idx}` : idx.toString()}
      value={value}
      className={styles['option']}
    >
      { label }
    </option>
  );
}
