import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../shared/formfields.module.scss';

function CheckboxWrapper( props ) {
  const {
    label,
    focused,
    children
  } = props;

  return (
    <div className={classnames(styles.checkboxList, { [styles.focused]: focused })}>
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
        { children }
      </div>
    </div>
  );
}

CheckboxWrapper.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /*
  * Whether or not the checkbox wrapper is focused
  */
  focused: PropTypes.bool
};

export default CheckboxWrapper;

