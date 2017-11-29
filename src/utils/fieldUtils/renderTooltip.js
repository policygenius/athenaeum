import React from 'react';
import Icon from 'atoms/Icon';
import Tooltip from 'atoms/Tooltip';

export default function renderTooltip(tooltip, className, iconClassName) {
  if (typeof tooltip === 'string') {
    return (
      <Tooltip
        className={className}
        right
        text={
          <Icon
            icon='tooltip'
            className={iconClassName}
          />
        }
      >
        {tooltip}
      </Tooltip>
    );
  }

  return (
    <Tooltip
      className={className}
      onClick={tooltip}
      right
      text={
        <Icon
          icon='tooltip'
          className={iconClassName}
        />
      }
    />
  );
}
