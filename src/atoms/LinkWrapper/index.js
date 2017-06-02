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
    ...rest,
  } = props;

  const classes = [
    styles['link'],
    colors[color],
    className,
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
  color: PropTypes.string
};

LinkWrapper.defaultProps = {
  color: 'neutral-4',
};

export default LinkWrapper;
