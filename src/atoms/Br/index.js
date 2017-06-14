import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './br.module.scss';

function Br(props) {
  const {
    small,
    medium,
    large,
    xLarge,
    xxLarge,
    className,
  } = props;

  const classes = [
    styles['br'],
    small && styles['sm'],
    medium && styles['med'],
    large && styles['lg'],
    xLarge && styles['x-lg'],
    xxLarge && styles['xx-lg'],
    className,
  ];

  return <span className={classnames(...classes)} />;
}


Br.propTypes = {
  /**
   * small breakpoint
   */
  small: PropTypes.bool,

  /**
   * medium breakpoint
   */
  medium: PropTypes.bool,

  /**
   * large breakpoint
   */
  large: PropTypes.bool,

  /**
   * X-large breakpoint
   */
  xLarge: PropTypes.bool,

  /**
   * XX-Large breakpoint
   */
  xxLarge: PropTypes.bool,

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

Br.defaultProps = {
  // Place any default props here.
};

export default Br;
