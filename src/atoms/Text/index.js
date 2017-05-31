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

const getWeight = ({ semibold, light, weight }) => {
  if (weight) return weight;
  if (semibold) return 'semibold';
  if (light) return 'light';

  return 'regular';
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
    children,
    className,
    type,
    color,
    variant,
  } = props;

  const tag = getTag(props);
  const weight = getWeight(props);

  const Element = `${tag}`;
  const classes = [
    styles['text'],
    styles[`typography-${type}`],
    styles[weight],
    colors[color],
    styles[variant],
    styles[tag],
    className,
  ];

  return (
    <Element className={classnames(...classes)}>
      { React.Children.map(children, convertChild) }
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
   * Text decoration
   */
  variant: PropTypes.oneOf([
    'strikethrough',
    'underline',
    'fineprint'
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
};

Text.defaultProps = {
  tag: 'p',
  type: 6
};

export default Text;
