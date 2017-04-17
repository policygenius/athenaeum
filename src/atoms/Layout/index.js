import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './layout.module.scss';

function Layout( props ) {
  const {
    children,
    childCols,
    breakpoint,
    horizontalAlign,
    verticalAlign
  } = props;

  // start at -1 so can bump to 0 in the conditional below
  let colsIdx = -1;

  const kids = React.Children.map( children, ( child ) => {
    // colsIdx mirrors idx until idx does not exist in childCols
    // this means that there are more children than childCols provided
    // in that case, reset colsIdx to 0 and continue counting up until next reset
    if ( !childCols[++colsIdx] ) {
      colsIdx = 0;
    }

    return (
      <div
        className={classnames(
          // grab childCols value with colsIdx
          // if childCols[idx] is undefined, default to 12 columns
          styles[`column-${childCols[colsIdx] || 12}`]
        )}
      >
        { child }
      </div>
    );
  });

  const hAlign = `h-${horizontalAlign}`;
  const vAlign = `v-${verticalAlign}`;

  return (
    <div>
      <div
        className={
          classnames( styles.layout, styles[breakpoint], styles[hAlign], styles[vAlign] )
        }
      >
        { kids }
      </div>
    </div>
  );
}

Layout.propTypes = {
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
  verticalAlign: PropTypes.string
};

Layout.defaultProps = {
  childCols: [ 12 ],
  breakpoint: 'small',
  horizontalAlign: 'start',
  verticalAlign: 'center'
};

export default Layout;
