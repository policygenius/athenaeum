import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import Layout from 'atoms/Layout';
import styles from '../shared/forms.module.scss';


export function isButton(child) {
  if (child.type.name === 'Button') return true;

  return false;
}

export function processFormChildren(children, formName) {
  return React.Children.map(children, child =>
    React.cloneElement(child, {
      htmlFor: formName,
      className: classnames(
          // If you'd like to give any special form specific classes
          // to child components:
          styles['form-item'],
          { [styles['form-button']]: isButton(child) },

          child.props.className
        ),
    })
  );
}

export function renderChildren(children, formName) {

  return React.Children.map(children, (child) => {

    if (child.type === Layout) {
      return (
        <Layout {..._.omit(child.props, 'children')}>
          { processFormChildren(child.props.children, formName ) }
        </Layout>
      );
    }

    return processFormChildren(children, formName);

  });
}

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
        { renderChildren(children, formName) }
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
