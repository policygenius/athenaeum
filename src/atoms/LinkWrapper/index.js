import React from 'react';
import PropTypes from 'prop-types';
import styles from './link_wrapper.module.scss';
import classnames from 'classnames';
import _ from 'lodash';

function LinkWrapper ( props ) {
  const {
    className,
    children,
  } = props;

  return (
    <a
      { ..._.omit(props, [ 'children', 'className' ]) }
      className={ classnames(styles.link, className) }>
      { children }
    </a>
  )
}

LinkWrapper.propTypes = {
  /**
   * This wrapper will take any props that you would use
   * for an anchor `<a>` tag. `href` is just an example.
   */
  href: PropTypes.string
}

export default LinkWrapper;
