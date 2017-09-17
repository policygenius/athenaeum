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
    spacing,
    center
  } = props;

  const classes = [
    styles['section'],
    (backgroundColor || backgroundImageUrl) && colors['neutral-8'],
    colors[`background-${backgroundColor}`],
    spacing && styles[`top-${spacing}`],
    spacing && styles[`bot-${spacing}`],
    center && styles['center'],
    className
  ];

  return (
    <div
      className={classnames(...classes)}
      style={{
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
};

Section.defaultProps = {
  // Place any default props here.
};

export default Section;
