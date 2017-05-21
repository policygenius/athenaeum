import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './text_component.module.scss';

const weight = ({ semibold, light }) => {
  if (semibold) return 'semibold';
  if (light) return 'light';

  return 'regular';
};

const convertChild = (child) => {
  // Check children for other TextComponents
  // and automatically convert them into <spans> if they are <p>.
  if (child.type === TextComponent &&
    child.props.tag === 'p') {

    return React.cloneElement(child, { tag: 'span' });
  }

  return child;
};


const filter = (children) => {
  if (typeof children.type === 'function') return children.type(children.props);

  return React.Children.map(children, convertChild);
};

function chooseTag(props, tag) {
  const {
    semibold,
    variant
  } = props;

  if (semibold) return 'strong';
  if (variant === 'italics') return 'em';
  if (variant === 'strikethrough') return 'span';

  return tag;
}

function TextComponent(props) {
  const {
    tag,
    children,
    type,
    className,
    variant,
    color,
  } = props;


  if (!children) return null;

  return React.createElement(
    chooseTag(props, tag),
    { className: classnames(
      styles[`typography-${type}`],
      styles[weight(props)],
      styles[color],
      styles[variant],
      styles[tag],
      className
    ) },
    filter(children),
  );
}

TextComponent.propTypes = {

  /**
   * You can use any html element text tag
   */
  tag: PropTypes.string,

  /**
   * determines typography class
   */
  type: PropTypes.number,

  /**
   * Font weight: 300
   */
  light: PropTypes.bool,

  /**
   * Font weight: 400
   */
  regular: PropTypes.bool,

  /**
   * Font weight: 600
   */
  semibold: PropTypes.bool,

  /**
   * adds class name to class set
   */
  className: PropTypes.string,

  /**
   * Text decoration
   */
  variant: PropTypes.oneOf([
    'strikethrough',
    'underline'
  ]),

  /**
   * Color style, see [Colors](#colors) for appropriate values
   */
  color: PropTypes.string,
};


TextComponent.defaultProps = {
  tag: 'p',
  type: 6
};

export default TextComponent;
