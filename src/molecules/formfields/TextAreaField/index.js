import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';

import styles from './textarea_field.module.scss';

function TextAreaField(props) {
  const {
    className,
    placeholder,
    label,
    rows,
    htmlFor,
    input,
    meta,
    noBaseStyle,
    fieldRef,
    id,
  } = props;

  const classes = [
    !noBaseStyle && styles['textarea-field'],
    meta && meta.active && !noBaseStyle && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  const message = meta && meta.touched && !meta.active && (meta.error || meta.warning);

  return (
    <div ref={fieldRef && fieldRef}>
      <div className={classnames(...classes)}>
        { label &&
          <label className={styles['label']} htmlFor={id || htmlFor}>{ label }</label>
        }

        <textarea
          className={styles['textarea']}
          placeholder={placeholder}
          rows={rows}
          id={id}
          {...input}
        />
      </div>
      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
}

TextAreaField.propTypes = {
  /**
   * Label is optional. If not provided, component will reorganize accordingly.
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * `for` prop on label
   */
  htmlFor: PropTypes.string,

  /**
   * Will append new classname to classSet
   */
  className: PropTypes.string,

  /**
   * placeholder text for text field
   */
  placeholder: PropTypes.string,

  /**
   * number of default rows in textarea
   */
  rows: PropTypes.number,

  /**
   * object with all necessary props for input
   */
  input: PropTypes.object,

  /**
   * The props under the meta key are metadata about the state of this field that `redux-form` tracks.
   */
  meta: PropTypes.object,

  /**
   * Passing `noBaseStyle=true` will omit the base class style
   */
  noBaseStyle: PropTypes.bool,

  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,

  /**
   * id added to the `input` node and used for the `for` HTML attribute on the associated `label`.
   * This prop is required to ensure the `label` and `input` follow best HTML5 accessibility practices as well as for testing purposes
   */
  id: PropTypes.string.isRequired,
};

TextAreaField.defaultProps = {
  placeholder: '',
  rows: 3,
  errorMessage: false,
};

export default TextAreaField;
