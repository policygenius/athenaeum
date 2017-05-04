import React from 'react';
import styles from 'molecules/formfields/shared/formfields.module.scss';

export default function renderOption(options = {}) {
  const {
    index,
    value,
    label,
    key
  } = options;

  return (
    <option
      key={key || `${value}-${label}-${index}`}
      value={value}
      className={styles['option']}
    >
      { label }
    </option>
  );
}
