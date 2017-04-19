import React from 'react';
import styles from '../shared/forms.module.scss';
import classnames from 'classnames';

function AddForm ( props ) {
  const {
    type,
    className,
    children,
    formName,
    onSubmit,
    onClose
  } = props;

  const kids = React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: styles['form-components'],
      htmlFor: formName
    })
  })

  return (
    <div className={ classnames( styles['formWrapper'], className ) }>
      <Icon
        icon='xIcon'
        onClick={ onClose }
        className={ styles['icon-close'] }
      />
      <form
        className={ styles.form }
        onSubmit={ onSubmit }
        name={ formName }
      >
        { kids }
      </form>
    </div>
  )
}

AddForm.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  formName: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func
}

export default AddForm;
