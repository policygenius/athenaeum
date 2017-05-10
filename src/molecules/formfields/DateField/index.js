import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import dateUtils from 'utils/dateUtils';

import styles from 'molecules/formfields/shared/formfields.module.scss';

function DateField(props) {
  const {
    className,
    label,
    input,
    meta,
  } = props;

  const dateParts = dateUtils.dateStrObj(input.value);

  return (
    <div className={classnames(styles['datefield'], { [styles.focused]: meta && meta.active }, className)}>
      <input id='date' type='hidden' value={input.value} />

      <label htmlFor='date' className={styles.label}>{label}</label>
      <div className={styles['datefield-wrapper']}>

        <input
          className={classnames(styles.input, styles['datefield-mon'])}
          type='text'
          placeholder='Mon (MM)'
          defaultValue={parseInt(dateParts.month, 10)}
        />

        <input
          className={classnames(styles.input, styles['datefield-day'])}
          type='text'
          placeholder='Day (DD)'
          defaultValue={dateParts.day}
        />

        <input
          className={classnames(styles.input, styles['datefield-year'])}
          type='text'
          placeholder='Year (YYYY)'
          defaultValue={dateParts.year}
        />

      </div>
    </div>
  );
}


DateField.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Label.
   */
  label: PropTypes.string,
  /**
   * input object contains any props to be passed directly: value.
   */
  input: PropTypes.object.isRequired,
  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,
};

DateField.defaultProps = {
  // Place any default props here.
  label: 'Date',
};

export default DateField;
