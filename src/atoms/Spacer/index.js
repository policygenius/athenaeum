import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './spacer.module.scss';

function Spacer ( props ) {
  const {
    xSmall,
    small,
    medium,
    large,
    xLarge,
    className
  } = props;

  const variants = classnames(
    { [styles.xSmall]: xSmall },
    { [styles.small]: small },
    { [styles.medium]: medium },
    { [styles.large]: large },
    { [styles.xLarge]: xLarge },
  ).split( " " );

  return (
    <div
      className={ classnames( variants[variants.length - 1], className ) }>
    </div>
  )
};

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
   * extra largej spacer
   */
  xLarge: PropTypes.bool,

  /**
   * additional className to be added to classSet
   */
  className: PropTypes.string
};

Spacer.defaultProps = {
  xSmall: true
}

export default Spacer;
