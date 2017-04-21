import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import * as icons from 'assets/images';
import styles from './icons.module.scss';
import classnames from 'classnames';

function Icon ( props ) {
  const icon = icons[props.icon];
  const {
    className,
  } = props;

  return (
    <div
      className={ classnames(styles['icon-wrapper'], className) }
    >
      <SVGInline
        svg={ icon }
      />
    </div>
  )
}

Icon.propTypes = {
  /**
   * Supply any additional class names. Resize the icon via the parent's stylesheet.
   */
  className: PropTypes.string,
  /**
   * The icon you'd like to display.
   */
  icon: PropTypes.string
}

export default Icon;
