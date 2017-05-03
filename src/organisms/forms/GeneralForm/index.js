import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../shared/forms.module.scss';


function GeneralForm( props ) {
  const {
    className,
    children,
    formName,
    onSubmit,

  } = props;

  return (
    <div className={classnames( styles[''], className )}>
      <form
        onSubmit={onSubmit}
        name={formName}
      >
        { children }
      </form>
    </div>
  );
}

GeneralForm.propTypes = {
  /**
   * class name added to class set
   */
  className: PropTypes.string,

  /**
   * name give to `name` prop on form
   */
  formName: PropTypes.string.isRequired,

  /**
   * callback fired when submitting form
   */
  onSubmit: PropTypes.func
};

export default GeneralForm;
