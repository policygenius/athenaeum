import React from 'react';

export default function renderPlaceholder(placeholder, className) {
  return (
    <option
      value=''
      className={className}
    >
      { placeholder }
    </option>
  );
}
