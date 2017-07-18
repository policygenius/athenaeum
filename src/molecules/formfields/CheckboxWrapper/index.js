import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Tooltip from 'atoms/Tooltip';
import styles from './checkbox_wrapper.module.scss';

function renderTooltip(tooltip, className) {
  if (typeof tooltip === 'string') {
    return <Tooltip className={styles[className]}>{tooltip}</Tooltip>;
  }

  return <Tooltip className={styles[className]} onClick={tooltip} />;
}

function CheckboxWrapper( props ) {
  const {
    label,
    focused,
    children,
    tooltip,
  } = props;

  return (
    <div className={classnames(styles['checkbox-list'], focused && styles['focused'] )}>
      <div className={styles['header']}>
        { label && <label htmlFor='checkbox' className={styles['label']}>{label}</label> }
        { tooltip && renderTooltip(tooltip, 'tooltip') }
      </div>
      <div className={styles['content']}>{ children }</div>
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
  focused: PropTypes.bool,

  /**
   * Adds tooltip to wrapper
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
};

export default CheckboxWrapper;
