import React, { PropTypes } from 'react';
import styles from '../shared/formfields.module.scss';
import classnames from 'classnames';

function CheckboxList ( props ) {
  const {
    label,
    focused,
    data,
    handleClick
  } = props;

  return (
    <div className={ classnames(styles.checkboxList, { [styles.focused]: focused })}>
      <label className={ styles.label }>{ label }</label>
      <div className={ styles.content }>
        {data.map((item, idx) => {
          return (
            <label className={ styles.checkbox } key={ idx } onClick={ () => handleClick( item ) }>
              <input type='checkbox' defaultChecked={ item.checked } disabled={ item.disabled } />
              <span className={ styles.checkboxLabel }>{ item.checkboxLabel }</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

CheckboxList.propTypes = {
  label: PropTypes.string,
  focused: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      checkboxLabel: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      checked: PropTypes.bool
    })
  ),
  handleClick: PropTypes.func.isRequired
};

export default CheckboxList;


