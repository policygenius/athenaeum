import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import toggleClass from 'utils/ReactUtils/toggleClass';

import styles from '../shared/formfields.module.scss';

function CheckboxList( props ) {
  const {
    label,
    focused,
    data,
    handleClick,
    meta,
  } = props;

  const focusedClass = toggleClass(focused || (meta && meta.active), styles['focused']);

  return (
    <div className={classnames(styles.checkboxList, focusedClass)}>
      {
        label &&
        <label
          htmlFor='checkbox'
          className={styles.label}
        >
          { label }
        </label>
      }

      <div className={styles.content}>
        {
          data.map( (item, idx) =>
            <label
              className={styles.checkbox}
              key={idx}
              onClick={() => handleClick( item )}
              htmlFor={`checkbox-${idx}`}
            >
              <input
                type='checkbox'
                defaultChecked={item.checked}
                disabled={item.disabled}
                id={`checkbox-${idx}`}
              />
              <span className={styles.checkboxLabel}>{ item.checkboxLabel }</span>
            </label>
          )
        }
      </div>
    </div>
  );
}

CheckboxList.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  focused: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      checkboxLabel: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      checked: PropTypes.bool
    })
  ),
  handleClick: PropTypes.func.isRequired,
  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,
};

export default CheckboxList;
