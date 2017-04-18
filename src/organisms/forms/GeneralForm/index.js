import React from 'react';
import styles from '../shared/forms.module.scss';
import classnames from 'classnames';

function GeneralForm ( props ) {
  const {
    type,
    className,
    children,
    formName,
    onSubmit
  } = props;

  const kids = React.Children.map(children, child => {
    return React.cloneElement(child, {
      htmlFor: formName,
      className: classnames(
        // If you'd like to give any special form specific classes
        // to child components:
        styles['form-components'],
        child.type == TextComponent ? styles['textComponent'] : '',
        child.type == LinkWrapper ? styles['textComponent'] : ''
      ),
    })
  })

  return (
    <div className={ classnames( className, styles[''] ) }>
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

GeneralForm.propTypes = {
  formName: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func
}

export default GeneralForm;
