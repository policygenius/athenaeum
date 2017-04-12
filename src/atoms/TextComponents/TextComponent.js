import React, { PropTypes } from 'react';
import styles from './textComponent.module.scss';
import classnames from 'classnames';

function TextComponent ( props ) {
  const {
    tag,
    children,
    type,
    className
  } = props;

  return React.createElement(
    tag,
    { className: classnames(className, styles['typography-' + type], 'funsies') },
    [...children]
  )
}

TextComponent.propTypes = {
  /**
   * You can use any html element type
   *
   */
  type: PropTypes.number.isRequired,
  tag: PropTypes.string
}

TextComponent.defaultProps = {
  tag: 'p',
}

export default TextComponent;
