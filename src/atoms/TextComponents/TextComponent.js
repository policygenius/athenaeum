import React, { PropTypes } from 'react';
import styles from './text_component.module.scss';
import classnames from 'classnames';

function setWeight( { semibold, light } ) {
  if ( semibold ) {
    return styles.semibold;
  } else if ( light ) {
    return styles.light;
  } else {
    return styles.regular;
  }
}

function TextComponent ( props ) {
  const {
    tag,
    children,
    type,
    className,
  } = props;

  return React.createElement(
    tag,
    { className: classnames(
      className,
      styles['typography-' + type],
      setWeight( props )
    ) },
    [...children]
  )
}

TextComponent.propTypes = {
  /**
   * You can use any html element text tag
   *
   */
  tag: PropTypes.string,
  type: PropTypes.number.isRequired,
  /**
   * Font weight: 300
   *
   */
  light: PropTypes.bool,
  /**
   * Font weight: 400
   *
   */
  regular: PropTypes.bool,
  /**
   * Font weight: 600
   *
   */
  semibold: PropTypes.bool,

}

TextComponent.defaultProps = {
  tag: 'p',
  type: 6
}

export default TextComponent;
