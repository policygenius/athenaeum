import React from 'react';

export default function renderPlaceholder( placeholder, className) {
  return (
    <option
      disabled
      hidden
      value=''
      className={className}
    >{ placeholder }</option>
  );
}
