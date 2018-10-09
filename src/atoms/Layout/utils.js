import React from 'react';
import omit from 'lodash/omit';
import get from 'lodash/get';
import assign from 'lodash/assign';
import Col from './Col';

export function processChild(child, layoutProps) {
  // TODO: Find a better way to type check here.
  // I believe the first now fails because of Preact
  if (
    child.type === Col ||
    get(child, 'nodeName.prototype.displayName') === 'Col' ||
    get(child, 'type.prototype.displayName') === 'Col' ||
    get(child, 'type.name') === 'Col' ||
    get(child, 'type.rclName') === 'Col' ||

    // This final check is to prevent extra div wrappers resulting from
    // the way React Hot Loader creates proxied versions of components (as shallow copies)
    React.cloneElement(child).type === <Col />.type
  ) {

    const colProps = assign(
      {},
      omit(layoutProps, [ 'padding' ]),
      child.props,
    );

    return React.cloneElement(child, colProps);
  }

  const colProps = assign(
    {},
    layoutProps,
    omit(child.props, [ 'className', 'style', 'onClick', 'onChange' ])
  );

  return (
    <Col {...colProps} >
      { child }
    </Col>
  );
}

export function processChildren(props) {
  const {
    children,
    smallCols,
    mediumCols,
    largeCols,
    xLargeCols,
    xxLargeCols,
    bottomSpacing,
    flex,
    fullwidth,
  } = props;

  // start at -1 so can bump to 0 in the conditional below
  let smIdx = -1;
  let mdIdx = -1;
  let lgIdx = -1;
  let xlgIdx = -1;
  let xxlgIdx = -1;

  return React.Children.map( children, ( child ) => {
    if (!child) return child; // Sanity check if child is null -> early return

    // colsIdx mirrors idx until idx does not exist in col array (ex. smallCols)
    // If col array at colsIdx is undifined, it is reset to 0, thus allowing
    // for column sizes to be set in a loop.

    if ( !smallCols[++smIdx] ) {
      smIdx = 0;
    }

    if ( !mediumCols[++mdIdx] ) {
      mdIdx = 0;
    }

    if ( !largeCols[++lgIdx] ) {
      lgIdx = 0;
    }

    if ( !xLargeCols[++xlgIdx] ) {
      xlgIdx = 0;
    }

    if ( !xxLargeCols[++xxlgIdx] ) {
      xxlgIdx = 0;
    }

    const layoutProps = {
      smallCols: smallCols[smIdx],
      mediumCols: mediumCols[mdIdx],
      largeCols: largeCols[lgIdx],
      xLargeCols: xLargeCols[xlgIdx],
      xxLargeCols: xxLargeCols[xxlgIdx],
      bottomSpacing,
      fullwidth,
      flex
    };

    return processChild(child, layoutProps);
  });
}
