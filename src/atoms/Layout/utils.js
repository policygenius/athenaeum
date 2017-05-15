import React from 'react';
import _ from 'lodash';
import Col from './Col';

export function processChild(child, layoutProps) {

  if (child.type === Col) {
    const colProps = Object.assign(
      {},
      _.omit(layoutProps, [ 'padding' ]),
      child.props,
    );

    return React.cloneElement(child, colProps);
  }

  const colProps = Object.assign(
    {},
    layoutProps,
    _.omit(child.props, [ 'className', 'style' ])
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
      fullwidth
    };

    return processChild(child, layoutProps);
  });
}

