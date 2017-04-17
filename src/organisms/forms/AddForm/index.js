import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import styles from '../shared/forms.module.scss';

function AddForm( props ) {
  const {
    className,
    children,
    formName,
    onSubmit,
    onClose
  } = props;

  const kids = React.Children.map(children, child => React.cloneElement(child, {
    className: styles['form-components'],
    htmlFor: formName
  }));

  return (
    <div className={classnames( styles['formWrapper'], className )}>
      <Icon
        icon='xIcon'
        onClick={onClose}
        className={styles['icon-close']}
      />
      <form
        className={styles.form}
        onSubmit={onSubmit}
        name={formName}
      >
        { kids }
      </form>
    </div>
  );
}

AddForm.propTypes = {
  /**
   * class name added to class set
   */
  className: PropTypes.string,

  /**
   * callback to close card
   */
  onClose: PropTypes.func.isRequired,

  /**
   * name given to the `name` prop for the form
   */
  formName: PropTypes.string.isRequired,

  /**
   * callback for submitting form
   */
  onSubmit: PropTypes.func
};

export default AddForm;
