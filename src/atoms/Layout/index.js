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
    variant,
  } = props;

  const kids = processChildren(props);

  return (
    <div
      style={style}
      className={classnames(
        styles['layout'],
        padding && styles['padding'],
        className,
        variant && styles[variant]
      )}
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
   * Sets columns grid width in the Layout within a viewport from `0px` up. Set to `'auto'` to allow width to be auto (i.e. flex-basis: auto)
   */
  smallCols: PropTypes.oneOfType([
    PropTypes.arrayOf( PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([ 'auto' ]),
    ])),
  ]),

  /**
   * Sets col grid width in viewport from `768px` up. Set to `'auto'` to allow width to be auto (i.e. flex-basis: auto)
   */
  mediumCols: PropTypes.oneOfType([
    PropTypes.arrayOf( PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([ 'auto' ]),
    ])),
  ]),

  /**
   * Sets col grid width in viewport from `1024px` up. Set to `'auto'` to allow width to be auto (i.e. flex-basis: auto)
   */
  largeCols: PropTypes.oneOfType([
    PropTypes.arrayOf( PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([ 'auto' ]),
    ])),
  ]),

  /**
   * Sets col grid width in viewport from `1280px` up. Set to `'auto'` to allow width to be auto (i.e. flex-basis: auto)
   */
  xLargeCols: PropTypes.oneOfType([
    PropTypes.arrayOf( PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([ 'auto' ]),
    ])),
  ]),

  /**
   * Sets col grid width in viewport from `1440px` up. Set to `'auto'` to allow width to be auto (i.e. flex-basis: auto)
   */
  xxLargeCols: PropTypes.oneOfType([
    PropTypes.arrayOf( PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([ 'auto' ]),
    ])),
  ]),

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

  /**
   * Gives child `Col`s `flex` prop.
   */
  flex: PropTypes.bool,

  /**
   * Special variant options.
   *
   * `'bordered-buckets'`: Creates borders around `Col` from medium viewports up.
   */
  variant: PropTypes.oneOf([ 'bordered-buckets', 'padding-small' ]),
};

Layout.defaultProps = {
  smallCols: [ 12 ],
  mediumCols: [],
  largeCols: [],
  xLargeCols: [],
  xxLargeCols: [],
};

export { Layout as default, Layout, Col };
