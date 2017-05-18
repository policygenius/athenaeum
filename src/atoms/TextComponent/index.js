import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './text_component.module.scss';

const weight = ({ semibold, light }) => {
  if (semibold) return 'semibold';
  if (light) return 'light';

  return 'regular';
};

const filter = (children) => {
  if (typeof children.type === 'function') return children.type(children.props);

  return children;
};

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
    tag,
    { className: classnames(
      styles[`typography-${type}`],
      styles[weight(props)],
      styles[color],
      styles[variant],
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
  variant: PropTypes.string,
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
