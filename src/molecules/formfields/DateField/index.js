import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import dateUtils from 'utils/dateUtils';
import renderOption from 'utils/Fields/renderOption';

import styles from 'molecules/formfields/shared/formfields.module.scss';

const renderMonthOption = (month, idx) => renderOption({
  key: month,
  value: idx + 1,
  reactKey: `${month}-${idx}`,
});

function renderMonthOptions() {
  return dateUtils.months().map(renderMonthOption);
}

const renderDayOption = (_, day) => renderOption({
  key: day + 1,
  value: day + 1,
  reactKey: `day-${day}`,
});

function renderDayOptions() {
  return [ ...Array(31) ].map(renderDayOption);
}

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
        <select
          className={classnames(styles.select, styles['datefield-mon'])}
          defaultValue={parseInt(dateParts.month, 10)}
        >
          { renderMonthOptions() }
        </select>

        <select
          className={classnames(styles.select, styles['datefield-day'])}
          defaultValue={dateParts.day}
        >
          { renderDayOptions() }
        </select>

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
