import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import colors from 'atoms/Color/colors.scss';
import styles from './text.module.scss';

const getTag = (props) => {
  const {
    tag,
    semibold,
    variant,
  } = props;

  if (semibold) return 'strong';
  if (variant === 'italics') return 'em';
  if (variant === 'strikethrough') return 'span';

  return tag;
};

const getWeight = ({ semibold, light, weight, bold }) => {
  if (weight) return weight;
  if (semibold) return 'semibold';
  if (light) return 'light';
  if (bold) return 'bold';
};

const getFont = ({ size, type, font, a }) => {
  const fontSize = type || size;

  if (a || font === 'a') {
    return styles[`type-a-${fontSize}-bold`];
  } else if (font === 'c') {
    return styles['type-c-7-regular'];
  }

  return styles[`type-b-${fontSize}-medium`];

};

const convertChild = (child) => {
  // Check children for other TextComponents
  // and automatically convert them into <spans> if they are <p>.
  if (child.type === Text && child.props.tag === 'p') {
    return React.cloneElement(child, { tag: 'span' });
  }

  return child;
};

function Text(props) {
  if (!props.children) return null;

  const {
    align,
    children,
    className,
    color,
    italic,
    onClick,
    spaced,
    variant,
  } = props;

  const tag = getTag(props);
  const weight = getWeight(props);
  const font = getFont(props);

  const Element = `${tag}`;
  const classes = [
    weight && weight,
    color && colors[color],
    variant && styles[variant],
    align && styles[align],
    spaced && styles['spaced'],
    italic && styles['italic'],
    className,
    font && font
  ];

  return React.createElement(
    tag,
    {
      className: classnames(classes),
      onClick
    },
    React.Children.map(children, convertChild)
  );
}


Text.propTypes = {
  /*
   * This prop provides a shorthand for setting the
   * font type to 'a'
   */
  a: PropTypes.bool,

  /*
   * This prop provides a shorthand for setting the
   * font type to 'b'
   */
  b: PropTypes.bool,

  /*
   * Text alignment
   */
  align: PropTypes.oneOf([
    'left',
    'right',
    'center'
  ]),
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
   *
   * Types for `a`: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11`
   *
   * Types for `b`: `5, 6, 7, 8, 10, 12`
   *
   * Types fo `c`: `1`
   */
  size: PropTypes.number,

  /**
   * Deprecated. Use 'size' instead
   */
  type: PropTypes.number,

  /**
   * Text decoration
   */
  variant: PropTypes.oneOf([
    'strikethrough',
    'underline',
    'fineprint',
    'label'
  ]),

  /**
   * Color style, see [Colors](#colors) for appropriate values
   */
  color: PropTypes.string,

  /**
   * - light = 300
   * - semibold = 500
   */
  weight: PropTypes.oneOf([
    'light',
    'semibold',
  ]),

  light: PropTypes.bool,
  semibold: PropTypes.bool,
  /**
   * Possible font types are `a`, `b`, and `c`
   */
  font: PropTypes.string,
  /**
   * Adds letter spacing. Use with `A9` and `A11` font
   */
  spaced: PropTypes.bool,
  /**
   * Adds italic
   */
  italic: PropTypes.bool,
  /**
   * onClick callback
   */
  onClick: PropTypes.func,
};

Text.defaultProps = {
  tag: 'p',
  size: 7,
  font: 'b',
  color: 'primary-3'
};

export default Text;
