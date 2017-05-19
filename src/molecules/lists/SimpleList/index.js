import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './simple_list.module.scss';

function SimpleList(props) {
  const {
    children,
    className,
  } = props;

  return (
    <ul className={classnames(styles['simple-list'], className)}>
      { children }
    </ul>
  );
}


SimpleList.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};


export default SimpleList;
