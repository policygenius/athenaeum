import React from 'react';

// eslint-disable-next-line
export class Partial extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export function partialRenderer(partials) {
  return (partialName, dataObject) => {
    // Will not render if data is undefined
    // To render without data, pass in truthy value.
    if (dataObject === undefined) return undefined;
    if (!partials[partialName]) return <div>{partialName}</div>;

    return partials[partialName](dataObject);
  };
}

export function separatePartials(children) {
  const parts = {
    Main: [],
  };

  if (!children) return parts;

  React.Children.map(children, (child) => {
    if (isNamedPartial(child)) {
      parts[child.type.name] = child;
    } else {
      parts.Main.push(child);
    }
  });

  return parts;
}

function isNamedPartial(child) {
  return child.type && child.type.prototype instanceof Partial;
}
