import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './hide.module.scss';

function getHideList(hideOn) {
  return hideOn.split(' ').map(hide => styles[hide]);
}

function Hide(props) {
  const {
    children,
    className,
    hideOn,
  } = props;

  const hideList = getHideList(hideOn);

  const classes = [
    styles['hide'],
    className,
    ...hideList,
  ];

  return (
    <div className={classnames(...classes)}>
      { children }
    </div>
  );
}


Hide.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * The screen sizes on which to hide the children -- use screen sizes from `Layout` component
   */
  hideOn: PropTypes.string.isRequired,
};

export default Hide;
