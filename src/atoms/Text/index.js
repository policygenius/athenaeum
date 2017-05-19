import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import colors from 'atoms/Color/colors.module.scss';
import styles from './text.module.scss';

function Text(props) {
  if (!props.children) return null;

  const {
    children,
    className,
    tag,
    type,
    weight,
    color,
    variant,
  } = props;

  const Element = `${tag}`;
  const classes = [
    styles[`typography-${type}`],
    styles[weight],
    colors[color],
    styles[variant],
    styles[tag],
    className,
  ];

  return (
    <Element className={classnames(...classes)}>
      { children }
    </Element>
  );
}


Text.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * You can use any html element text tag
   */
  tag: PropTypes.string,

  /**
   * Determines typography class
   */
  type: PropTypes.number,

  /**
   * Font weight: light|semibold|bold
   * - light = 300
   * - semibold = 500
   * - bold = 600
   */
  weight: PropTypes.oneOf([
    'light',
    'semibold',
    'bold',
  ]),

  /**
   * Text decoration
   */
  variant: PropTypes.oneOf([
    'strikethrough',
    'underline',
  ]),
  /**
   * Color style, see [Colors](#colors) for appropriate values
   */
  color: PropTypes.string,
};

Text.defaultProps = {
  tag: 'p',
  type: 6
};

export default Text;
