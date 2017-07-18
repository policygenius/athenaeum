import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../layout.module.scss';

function Col(props) {
  const {
    children,
    className,
    smallCols,
    mediumCols,
    largeCols,
    xLargeCols,
    xxLargeCols,
    padding,
    fullwidth,
    flex,
    style,
    bottomSpacing,
    onClick,
  } = props;

  const classes = [
    styles['col'],
    smallCols && styles[`col-sm-${smallCols}`],
    mediumCols && styles[`col-md-${mediumCols}`],
    largeCols && styles[`col-lg-${largeCols}`],
    xLargeCols && styles[`col-xlg-${xLargeCols}`],
    xxLargeCols && styles[`col-xxlg-${xxLargeCols}`],
    fullwidth && styles['fullwidth'],
    flex && styles['flex'],
    styles[`bottom-spacing-${bottomSpacing}`],
    padding && styles['padding'],
    className,
  ];

  return (
    <div className={classnames(...classes)} style={style} onClick={onClick}>
      { children }
    </div>
  );
}

Col.propTypes = {
  /**
   * Supply any additional class names.
   */
  className: PropTypes.string,

  /**
   * sets bottom spacing between children in Layout
   * - see [Spacer](#spacer) for appropriate values
   */
  bottomSpacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Overides column grid width within a viewport from `0px` up. Width can also be set to 'auto'.
   */
  smallCols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([ 'auto' ])
  ]),

  /**
   * Sets col grid width in viewport from `768px` up. Width can also be set to 'auto'.
   */
  mediumCols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([ 'auto' ])
  ]),

  /**
   * Sets col grid width in viewport from `1024px` up. Width can also be set to 'auto'.
   */
  largeCols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([ 'auto' ])
  ]),

  /**
   * Sets col grid width in viewport from `1280px` up. Width can also be set to 'auto'.
   */
  xLargeCols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([ 'auto' ])
  ]),
  /**
   * Sets col grid width in viewport from `1440px` up. Width can also be set to 'auto'.
   */
  xxLargeCols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([ 'auto' ])
  ]),

  /**
   * Overides flex, changes Col to grow to fill empty space in the row (`flex-grow: 1`)
   */
  flex: PropTypes.bool,

  /**
   * Overides and removes padding set from Layout
   */
  fullwidth: PropTypes.bool,

  /**
   * Adds standard (~6px) left/right padding to the `Layout`
   */
  padding: PropTypes.bool,

  /**
   * adds additional styles to the column as a React styles object  ``
   * - For useful positional styles, [Checkout this Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
   */
  style: PropTypes.object,
  /**
   * onClick handler
   */
  onClick: PropTypes.func,
};


export default Col;
