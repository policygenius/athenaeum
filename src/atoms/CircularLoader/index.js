import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './circular_loader.module.scss';

function CircularLoader(props) {
  const {
    className,
    ...rest
  } = props;

  const classes = classnames(
    styles['circular-loader'],
    className,
  );

  return (
    <div className={classes} {...rest} />
  );
}

CircularLoader.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

export default CircularLoader;
