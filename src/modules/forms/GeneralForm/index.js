import React from 'react';
import styles from './forms.module.scss';

function GeneralForm ( { children, formName, onSubmit } ) {

  const kids = React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: styles['form-components'],
      htmlFor: formName
    })
  })

  return (
    <form
      className={ styles.form }
      onSubmit={ onSubmit }
      name={ formName }
    >
      { kids }
    </form>
  )
}

GeneralForm.propTypes = {
  formName: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func
}

export default GeneralForm;
