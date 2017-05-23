import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './animate.module.scss';

const createWraps = (prevWrap, animation) =>
  React.createElement(
    'span',
    { className: classnames(
      styles[animation],
      styles['animate']
    ) },
    prevWrap
  );

function getAnimationsList(animations) {
  if (!animations) return null;

  return animations.split(' ');
}

function Animate(props) {
  const {
    children,
    className,
    animations,
  } = props;

  const animationsList = getAnimationsList(animations);
  const wraps = React.Children.count(children) ? animationsList.reduce(createWraps, children) : children;

  return (
    <span
      className={
        classnames(
          styles['animation-wrapper'],
          className
        )
      }
    >
      { wraps }
    </span>
  );
}

Animate.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Possible animations:
   * `shake,
   * fadeOut,
   * rotate-left,
   * rotate-right,
   * slideDown
   * `
   */
  animations: PropTypes.string,
};

Animate.defaultProps = {
  // Place any default props here.
};

export default Animate;
