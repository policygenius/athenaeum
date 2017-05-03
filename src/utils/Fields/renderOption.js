import React from 'react';
import styles from 'molecules/formfields/shared/formfields.module.scss';

export default function renderOption(options = {}) {
  const {
    index,
    key,
    value,
    reactKey,
  } = options;

  return (
    <option
      key={reactKey || `${key}-${value}-${index}`}
      value={value}
      className={styles['option']}
    >
      { key }
    </option>
  );
}
