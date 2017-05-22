import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import classnames from 'classnames';

import * as icons from 'assets/images';
import styles from './icons.module.scss';

function Icon( props ) {
  const icon = icons[props.icon];
  const {
    className,
    onClick,
    height,
    width,
    inline
  } = props;

  return (
    <span
      className={
        classnames(
          styles['icon-wrapper'],
          onClick && styles['clickable'],
          inline && styles[`inline-${inline}`],
          className
        )}
      onClick={onClick}
      style={{
        width,
        height
      }}
    >
      { icon && <SVGInline svg={icon} /> }
    </span>
  );
}

Icon.propTypes = {
  /**
   * Supply any additional class names. Resize the icon via the parent's stylesheet.
   */
  className: PropTypes.string,
  /**
   * The icon you'd like to display.
   */
  icon: PropTypes.string,
  /**
   * Click handler for the wrapper div around the svg
   */
  onClick: PropTypes.func,
  /**
   * Override the default height of the icon. Icon will maintain its proportions.
   */
  height: PropTypes.string,
  /**
   * Override the default width of the icon. Icon will maintain its proportions.
   */
  width: PropTypes.string,
  /**
   * For use with another component e.g. Text. Vertically aligns to the middle, adds margin.
   */
  inline: PropTypes.oneOf([ 'left', 'right' ])
};

export default Icon;
