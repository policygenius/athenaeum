import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './sticky.module.scss';

function Sticky(props) {
  const {
    children,
    className,
  } = props;

  const classes = [
    styles['sticky'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      { children }
    </div>
  );
}


Sticky.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

Sticky.defaultProps = {
  // Place any default props here.
};

export default Sticky;
