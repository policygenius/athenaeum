import React from 'react';
import styles from './navigator.module.scss';
import classnames from 'classnames';

function Navigator ( props ) {
  const {
    children,
    className
  } = props;

  return (
    <div className={ classnames(className, styles['navigator']) }>
      { children }
    </div>
  );
}


Navigator.propTypes = {
  /**
   * This prop will be add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: React.PropTypes.string,
}

Navigator.defaultProps = {
  // Place any default props here.
}

export default Navigator;
