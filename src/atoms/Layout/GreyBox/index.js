import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../layout.module.scss';
import Col from '../Col';

function GreyBox(props) {
  const {
    className,
  } = props;

  const classes = cx(
    styles['grey-box'],
    className,
  );

  return (
    <Col
      {...props}
      className={classes}
    />
  );
}

GreyBox.rclName = 'Col';

GreyBox.propTypes = {
  /**
   * Supply any additional class names.
   */
  className: PropTypes.string,
};

export default GreyBox;
