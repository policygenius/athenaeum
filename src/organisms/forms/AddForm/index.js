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
    onClose,
    closeIcon,
  } = props;

  const kids = React.Children.map(children, (child) => React.cloneElement(child, {
    className: styles['form-components'],
    htmlFor: formName
  }));

  return (
    <div className={classnames( styles['form-wrapper'], className )}>
      <hr className={styles['hr']} />
      <div className={styles['inner-form']}>
        {
          closeIcon
            && (
              <Icon
                icon='xIcon'
                onClick={onClose}
                className={styles['icon-close']}
              />
            )
        }

        <form
          className={styles['form']}
          onSubmit={onSubmit}
          name={formName}
        >
          { kids }
        </form>
      </div>
      <hr className={styles['hr']} />
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
  onClose: PropTypes.func,

  /**
   * determines if the close icon is present
   */
  closeIcon: PropTypes.bool.isRequired,

  /**
   * name given to the `name` prop for the form
   */
  formName: PropTypes.string.isRequired,

  /**
   * callback for submitting form
   */
  onSubmit: PropTypes.func
};

AddForm.defaultProps = {
  closeIcon: true,
};

export default AddForm;
