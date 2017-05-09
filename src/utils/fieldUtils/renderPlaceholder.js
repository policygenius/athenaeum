import React from 'react';

export default function renderPlaceholder(placeholder, className) {
  return (
    <option
      disabled
      hidden
      value={-1}
      className={className}
    >{ placeholder }</option>
  );
}
