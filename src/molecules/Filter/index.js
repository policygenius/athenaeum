import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { renderSelectOptions } from 'utils/fieldUtils';

import styles from './filter.module.scss';

function Filter(props) {
  const {
    className,
    label,
    onChange,
    value,
    selectOptions,
    forProp,
  } = props;

  const classes = [
    styles['filter'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      { label && (
        <label className={styles['label']} htmlFor={forProp}>
          { label }
        </label>
      )}

      <div className={styles['select-wrapper']}>
        <select
          className={styles['select']}
          id={forProp}
          onChange={onChange}
          value={value}
        >
          { renderSelectOptions(selectOptions) }
        </select>
      </div>
    </div>
  );
}

Filter.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * adds for property to label with corresponding id to select field
   */
  forProp: PropTypes.string,

  /**
   * optional label for filter
   */
  label: PropTypes.string,

  /**
   * function to be fired when select value changes
   */
  onChange: PropTypes.func,

  /**
   * array containing objects for select value
   */
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
  })),

  /**
   * value to display on filter; acts as default value as well
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default Filter;
