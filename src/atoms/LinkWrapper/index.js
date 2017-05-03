import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import styles from './link_wrapper.module.scss';

function LinkWrapper( props ) {
  const {
    className,
    children,
    color
  } = props;

  return (
    <a
      {..._.omit(props, [ 'children', 'className', 'color' ])}
      className={classnames(styles.link, styles[color], className)}
    >
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

export default LinkWrapper;
