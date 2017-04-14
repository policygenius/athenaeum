import React, { PropTypes } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import styles from './layout.module.scss';

// add number for cols in a row and then wrap
// remove boolean for breakpoins, just set it as a string
function Layout ( props ) {
  const {
    children,
    childCols,
    breakpoint,
  } = props;

  const kids = React.Children.map( children, ( child, idx ) => {
    return (
      <div
        className={ classnames(
          styles[`column-${ childCols[idx] }`]
        )}
      >
        { child }
      </div>
    )
  });

  return (
    <div
      className={
        classnames( styles['flex-base'], styles[breakpoint] )
      }
    >
      { kids }
    </div>
  )
};

Layout.propTypes = {
  /**
   * each number in array sets column width for each child in Layout
   */
  childCols: PropTypes.arrayOf( PropTypes.number ),

  /**
   * determines pixel breakpoint for columns and rows
   */
  breakpoint: PropTypes.string
};

Layout.defaultProps = {
  childCols: [12],
  breakpoint: 'small'
}

export default Layout;
