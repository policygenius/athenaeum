import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import colors from 'atoms/Color/colors.scss';
import styles from './link_wrapper.module.scss';

function LinkWrapper( props ) {
  const {
    className,
    children,
    color,
    variant,
    type,
    hover,
    ...rest
  } = props;

  const classes = [
    styles['link'],
    color && colors[color],
    variant && styles[variant],
    type && styles[type],
    hover && styles[hover],
    className && className,
  ];

  return (
    <a {...rest} className={classnames(...classes)}>
      { children }
    </a>
  );
}

LinkWrapper.propTypes = {
  /**
   * This wrapper will take any props that you would use
   * for an anchor `<a>` tag. `href` is just an example.
   */
  href: PropTypes.string,

  /**
   * class name to be added to class Set
   */
  className: PropTypes.string,

  /**
   * color of link; follows PG color naming. Neutral colors not available
   */
  color: PropTypes.string,
  /**
   * Possible variants are: `no-text-decoration`
   */
  variant: PropTypes.string,
  /**
   * Possible type attributes are: `primary` and `secondary`
   */
  type: PropTypes.string,
  /**
   * Possible type attributes are: `float`, `underline`
   */
  hover: PropTypes.string,
};

LinkWrapper.defaultProps = {
  color: 'neutral-1',
};

export default LinkWrapper;
