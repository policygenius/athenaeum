import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import colors from 'atoms/Color/colors.scss';
import styles from './section.module.scss';

function Section(props) {
  const {
    children,
    className,
    backgroundImageUrl,
    backgroundColor,
    color,
    spacing,
    center,
    padding,
    style
  } = props;

  const classes = [
    styles['section'],
    color && colors[color],
    colors[`background-${backgroundColor}`],
    spacing && styles[`top-${spacing}`],
    spacing && styles[`bot-${spacing}`],
    center && styles['center'],
    padding && styles['padding'],
    className
  ];

  return (
    <div
      className={classnames(...classes)}
      style={{
        ...style,
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <div className={styles.wrapper}>
        { children }
      </div>
    </div>
  );
}


Section.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Full string to be used with `url()` for the background-image
   */
  backgroundImageUrl: PropTypes.string,
  /**
   * Color style, see [Colors](#colors) for appropriate values
   */
  color: PropTypes.string,
  /**
   * Color style, see [Colors](#colors) for appropriate values
   */
  backgroundColor: PropTypes.string,
  /**
   * Spacer style, see [Spacers](#spacers) for appropriate values
   */
  spacing: PropTypes.number,
  /**
   * Center content
   */
  center: PropTypes.bool,
  /**
   * Padding, see [Spacers](#spacers) for appropriate values
   */
  padding: PropTypes.number,
  /**
   * React Style object
   */
  style: PropTypes.object,
};

Section.defaultProps = {
  // Place any default props here.
};

export default Section;
