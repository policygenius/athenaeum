import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import styles from './tooltip.module.scss';

function Tooltip( props ) {
  const {
    children,
    className
  } = props;

  return (
    <div className={classnames(styles['tooltip-wrapper'], className)}>
      <Icon icon='questionMark' className={styles['tooltip']} />
      <div className={styles['hover-message']}>
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
};

export default Tooltip;
