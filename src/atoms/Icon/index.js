import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import classnames from 'classnames';
import merge from 'lodash/merge';
import { icons as ICONS } from './constants';

import styles from './icons.module.scss';

function Icon( props ) {
  const {
    className,
    onClick,
    height,
    width,
    inline,
    icon,
    renderSVGDOM,
    ...rest
  } = props;

  if (!icon) { return null; }

  const wrapperProps = {
    className: classnames(
      styles['icon-wrapper'],
      onClick && styles.clickable,
      inline && styles.inline,
      inline && styles[inline],
      className
    ),
    onClick,
    style: {
      width,
      height
    },
    ...rest
  };

  const sanitizedIcon = icon.replace(/[^a-zA-Z0-9_-]/, '');

  const src = `https://storage.googleapis.com/pg-static-assets/svgs/${sanitizedIcon}.svg`;

  if ( typeof icon === 'string' && renderSVGDOM ) {
    return (
      <SVG
        src={src}
        cacheGetRequests
        onError={err => console.error(err)}
        wrapper={svgProps =>
          <span {...merge(svgProps, wrapperProps)} />
        }
      />
    );
  }

  return (
    <span {...wrapperProps} >
      <img
        alt={sanitizedIcon}
        className={styles.img}
        src={src}
      />
    </span>
  );
}


Icon.propTypes = {
  /**
   * Supply any additional class names. Resize the icon via the parent's stylesheet.
   */
  className: PropTypes.string,
  /**
   * The icon you'd like to display from our cloud library.
   */
  icon: PropTypes.oneOf(ICONS).isRequired,
  /**
   * Render the full SVG DOM instead of an `<img />`
   */
  renderSVGDOM: PropTypes.bool,
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
  inline: PropTypes.oneOfType([
    PropTypes.oneOf([ 'left', 'right' ]),
    PropTypes.bool
  ])
};

export default Icon;
