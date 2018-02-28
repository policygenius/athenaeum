import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { icons as ICONS } from './constants';

import styles from './icons.module.scss';

const checkLS = () => {
  if (typeof window !== 'undefined' && !window.lazySizes) {
    /* eslint-disable no-console */
    console.warn('lazysizes not loaded.');
    /* eslint-enable no-console */

    return false;
  }

  return true;
};

function Icon( props ) {
  const {
    className,
    onClick,
    height,
    width,
    inline,
    icon,
    lazy,
    alt,
    title,
    ...rest
  } = props;

  if (!icon) { return null; }

  const wrapperProps = {
    className: cx(
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

  const isLazy = lazy && checkLS();
  const sanitizedIcon = icon.replace(/[^a-zA-Z0-9_-]/, '');
  const src = `https://static.policygenius.com/svgs/${sanitizedIcon}.svgz`;

  // lazyload css class comes from Img component
  return (
    <span {...wrapperProps} >
      <img
        className={cx(
          styles.img,
          isLazy && 'lazyload'
        )}
        alt={alt || sanitizedIcon}
        title={title || sanitizedIcon}
        data-src={isLazy ? src : undefined}
        src={isLazy ? undefined : src}
        {...rest}
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
  ]),
  /**
   * Set to false to turn off lazyloading.
   */
  lazy: PropTypes.bool,
  /**
   * Defaults to icon name.
   */
  alt: PropTypes.string,
  /**
   * Defaults to icon name.
   */
  title: PropTypes.string
};

Icon.defaultProps = {
  lazy: true
};

export default Icon;
