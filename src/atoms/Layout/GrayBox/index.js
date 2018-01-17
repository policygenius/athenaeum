import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../layout.module.scss';
import Col from '../Col';

function GrayBox(props) {
  const {
    className,
  } = props;

  const classes = cx(
    styles['gray-box'],
    className,
  );

  return (
    <Col
      {...props}
      className={classes}
    />
  );
}

GrayBox.rclName = 'Col';

GrayBox.propTypes = {
  /**
   * Supply any additional class names.
   */
  className: PropTypes.string,
};

export default GrayBox;
