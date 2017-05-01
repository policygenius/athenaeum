import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from 'atoms/Tooltip';

import styles from './data_row.module.scss';

function DataRow(props) {
  const {
    className,
    variant,
    label,
    value,
    description,
  } = props;

  return (
    <div className={classnames(styles['data-row'], styles[`data-row-${variant}`], className)}>
      <span className={classnames(styles['label'])}>
        { label }
        { description && <Tooltip className={styles['tip']}>{ description }</Tooltip> }
      </span>

      <span className={classnames(styles['value'])}>
        { value }
      </span>
    </div>
  );
}


DataRow.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Possible variants are: `final` or (default)
   */
  variant: PropTypes.string,
  /**
   * label/name for data
   */
  label: PropTypes.string.isRequired,
  /**
   * value for data could be a string or a number.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  /**
   * optional helper text describing this data, adds a hover-able tooltip.
   */
  description: PropTypes.string,
};

export default DataRow;
