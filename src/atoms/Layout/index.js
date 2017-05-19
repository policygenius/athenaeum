import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { processChildren } from './utils';
import styles from './layout.module.scss';
import Col from './Col';

function Layout( props ) {
  const {
    className,
    padding,
    style,
  } = props;

  const kids = processChildren(props);

  return (
    <div
      style={style}
      className={classnames(
        styles.layout, padding && styles.padding, className)}
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
   * sets bottom spacing between children in Layout
   * - see [Spacer](#spacer) for appropriate values
   */
  bottomSpacing: PropTypes.string,

  /**
   * determines pixel breakpoint for columns and rows
   */
  breakpoint: PropTypes.string,

  /**
   * each number in array sets column width for each child in Layout
   */
  childCols: PropTypes.arrayOf( PropTypes.number ),

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
   * Adds standard (~6px) left/right padding to the `Layout`
   */
  padding: PropTypes.bool,

  /**
   * prevents Layout from automatically passing left and right padding to all of its direct children (`<Cols />`).
   * Will not remove padding that is explicitly added to a `<Col />`
   */
  fullwidth: PropTypes.bool,

  /**
   * adds additional styles to the column as a React styles object.
   * - For useful positional styles, [Checkout this Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   */
  style: PropTypes.object,
};

Layout.defaultProps = {
  smallCols: [ 12 ],
  mediumCols: [],
  largeCols: [],
  xLargeCols: [],
  xxLargeCols: [],
};

export { Layout as default, Layout, Col };
