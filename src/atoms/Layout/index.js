import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import styles from './layout.module.scss';
import Col from './Col';

function Layout( props ) {
  const {
    children,
    className,
    smallCols,
    mediumCols,
    largeCols,
    xLargeCols,
    xxLargeCols,
    fullwidth,
    style,
  } = props;

  // start at -1 so can bump to 0 in the conditional below
  let smIdx = -1;
  let mdIdx = -1;
  let lgIdx = -1;
  let xlgIdx = -1;
  let xxlgIdx = -1;

  const kids = React.Children.map( children, ( child ) => {
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
    };

    const colProps = Object.assign(
      layoutProps,
      _.omit(child.props, [ 'className', 'style' ])
    );

    if (child.type.name === 'Col') {
      return React.cloneElement(child, colProps);
    }

    return (
      <Col {...colProps} >
        { child }
      </Col>
    );
  });

  return (
    <div
      className={classnames(
        styles.layout,
        fullwidth && styles.fullwidth,
        className
      )}
      style={style}
    >
      { kids }
    </div>
  );
}

Layout.propTypes = {
  /**
   * Supply any additional class names.
   */
  className: PropTypes.string,

  /**
   * determines pixel breakpoint for columns and rows
   */
  breakpoint: PropTypes.string,

  /**
   * each number in array sets column width for each child in Layout
   */
  childCols: PropTypes.arrayOf( PropTypes.number ),

  /**
   * determines alignment of columns horizontally
   */
  horizontalAlign: PropTypes.string,

  /**
   * determines alignment of columns vertically
   */
  verticalAlign: PropTypes.string,

  /**
   * Sets columns grid width in the Layout within a viewport from `0px` up
   */
  smallCols: PropTypes.arrayOf( PropTypes.number ),
  /**
   * Sets col grid width in viewport from `768px` up
   */
  mediumCols: PropTypes.arrayOf( PropTypes.number ),
  /**
   * Sets col grid width in viewport from `1024px` up
   */
  largeCols: PropTypes.arrayOf( PropTypes.number ),
  /**
   * Sets col grid width in viewport from `1280px` up
   */
  xLargeCols: PropTypes.arrayOf( PropTypes.number ),
  /**
   * Sets col grid width in viewport from `1440px` up
   */
  xxLargeCols: PropTypes.arrayOf( PropTypes.number ),
  /**
   * removes left and right padding from Layout.
   */
  fullwidth: PropTypes.bool,
  /**
   * adds additional styles to the column as a React styles object.
   * - For useful positional styles, [Checkout this Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   */
  style: PropTypes.object
};

Layout.defaultProps = {
  smallCols: [ 12 ],
  mediumCols: [],
  largeCols: [],
  xLargeCols: [],
  xxLargeCols: [],
};

export default Layout;
