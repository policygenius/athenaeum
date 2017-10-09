import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './spacer.scss';

const classes = (args) => {
  const {
    xSmall,
    small,
    medium,
    large,
    xLarge,
    spacer,
    size,
    className
  } = args;

  if (size) return [ styles[`size-${size}`], className ];
  if (spacer) return [ styles[`top-${spacer}`], className ];

  return [
    xSmall && styles['top-2'],  // ru(.5)
    small && styles['top-4'],   // ru(1)
    medium && styles['top-6'],  // ru(1.5)
    large && styles['top-11'],  // ru(3)
    xLarge && styles['top-12'], // ru(6)
    className,
  ];
};

function Spacer(props) {
  return <div className={classnames(...classes(props))} />;
}

Spacer.propTypes = {
  /**
   * extra small spacer
   */
  xSmall: PropTypes.bool,

  /**
   * small spacer
   */
  small: PropTypes.bool,

  /**
   * medium spacer
   */
  medium: PropTypes.bool,

  /**
   * large spacer
   */
  large: PropTypes.bool,

  /**
   * extra large spacer
   */
  xLarge: PropTypes.bool,

  /**
   * Controls spacing above this component. Increases by ru(.25) until spacer={10}.
   * spacer={11} yields ru(3). /n
   * spacer={12} yeilds ru(6).
   */
  spacer: PropTypes.oneOf([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]),

  /**
   * additional className to be added to classSet
   */
  className: PropTypes.string,
  /**
   * Size of the spacer
   */
  size: PropTypes.oneOf([ 6, 12, 18, 24, 36, 60, 84, 120, 162 ]),
};

Spacer.defaultProps = {
  xSmall: true,
};

export default Spacer;
