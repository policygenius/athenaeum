import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import omitBy from 'lodash/omitBy';

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

const getFont = ({ size, type, font, a }) => {
  const fontSize = type || size;

  // TODO: Remove 'a' prop as an option from component
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

const getWeight = ({ font, bold, semibold }) => {
  if (font !== 'b') { return false; }
  if (bold || semibold ) { return styles.bold; }

  return false;
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
    style,
    inherit,
    inheritSize,
    inheritColor
  } = props;

  const font = getFont(props);
  const weight = getWeight(props);
  const tag = getTag(props);

  const classes = [
    weight && weight,
    color && colors[color],
    variant && styles[variant],
    align && styles[align],
    spaced && styles['spaced'],
    italic && styles['italic'],
    className && className,
    font && font,
    inherit && styles['inherit'],
    inheritSize && styles['inherit-size'],
    inheritColor && styles['inherit-color']
  ];

  return React.createElement(
    tag,
    omitBy({
      className: classnames(classes),
      style,
      onClick
    }, isUndefined),
    React.Children.map(children, convertChild)
  );
}


Text.propTypes = {

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
   * Add custom inline style
   */
  style: PropTypes.object,

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
   * Possible font types are `a`, `b`, and `c`
   */
  font: PropTypes.string,

  /**
   * Adds letter spacing. Use with `A9` and `A11` font
   */
  spaced: PropTypes.bool,

  /**
   * Makes text bold
   */
  bold: PropTypes.bool,

  /**
   * Adds italic
   */
  italic: PropTypes.bool,

  /**
   * onClick callback
   */
  onClick: PropTypes.func,

  /**
   * Deprecated. Use 'size' instead
   */
  type: PropTypes.number,

  /**
   * Deprecated
   */
  weight: PropTypes.oneOf([]),

  /**
   * Deprecated
   */
  light: PropTypes.bool,

  /**
   * Deprecated
   */
  semibold: PropTypes.bool,

  /**
   * Deprecated
   */
  a: PropTypes.bool,

  /**
   * Deprecated
   */
  b: PropTypes.bool,

  /**
   * Inherit font-size, line-height, and color from parent
   */
  inherit: PropTypes.bool,

  /**
   * Inherit font-size from parent
   */
  inheritSize: PropTypes.bool,

  /**
   * Inherit color from parent
   */
  inheritColor: PropTypes.bool,
};

Text.defaultProps = {
  tag: 'p',
  size: 8,
  font: 'b',
  color: 'primary-3'
};

export default Text;
