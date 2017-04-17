import React, { PropTypes } from 'react';
import styles from './tooltip.module.scss';
import classnames from 'classnames';

function Tooltip ( props ) {
  const {
    children,
    className
  } = props;

  return (
    <div className={ className }>
      <Icon icon='tooltip' className={ styles['tooltip'] } />
      <div className={ styles['hover-message'] }>
        { children }
      </div>
    </div>
  );
}


Tooltip.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
}

export default Tooltip;
