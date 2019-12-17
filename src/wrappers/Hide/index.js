import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './hide.module.scss';

function getHideList(hideOn) {
  return hideOn.split(' ').map((hide) => styles[hide]);
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
   * The screen sizes on which to hide the children. Pass in a space separated string
   *
   * Values:
   * * `mobile`: hides element on screens up to 767px
   *
   * * `tablet`: hide element only on screens from 768px to 1024px
   *
   * * `tablet-up`: hide element on screens from 768px up
   *
   * * `desktop`: hide element on screens from 1025px up
   */
  /* eslint-disable */
  hideOn: (props, propName, componentName) => {
    if (/small|medium|large|xLarge|xxLarge/.test(props[propName])) {
      throw new Error(`Deprecated prop values for ${propName} supplied to ${componentName}. Please use one or a combination of mobile, tablet and desktop. Refer to RCL documentation for correct breakpoint mappings.`);
    }
  }
  /* eslint-enable */
};

export default Hide;
