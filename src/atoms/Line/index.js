import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './line.module.scss';

function Line(props) {
  const {
    className,
    border,
    spacer,
  } = props;

  const classes = [
    styles['line'],
    styles[border],
    styles[`spacer-${spacer}`],
    className,
  ];

  return <hr className={classnames(...classes)} />;
}

Line.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Border Type dotted or dashed.
   */
  border: PropTypes.oneOf([
    'dotted',
    'dashed',
  ]),
  /**
   * Determines spacing between the line
   */
  spacer: PropTypes.number,
};

export default Line;
