import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import styles from './link_wrapper.module.scss';

function LinkWrapper( props ) {
  const {
    className,
    children
  } = props;

  return (
    <a
      {..._.omit(props, [ 'children', 'className' ])}
      className={classnames(styles.link, className)}
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
  className: PropTypes.string
};

export default LinkWrapper;
