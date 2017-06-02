import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import ErrorMessage from 'atoms/ErrorMessage';

import styles from './text_field.module.scss';

function TextField( props ) {
  const {
    className,
    placeholder,
    label,
    input,
    htmlFor,
    meta,
    noBaseStyle,
    mask,
    maskChar,
    secure,
    id
  } = props;

  const classes = [
    !noBaseStyle && styles['text-field'],
    meta && meta.active && !noBaseStyle && styles['focused'],
    meta && meta.touched && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  const message = meta && meta.touched && !meta.active && (meta.error || meta.warning);

  return (
    <div>
      <div className={classnames(...classes)}>
        { label &&
          <div className={classnames(styles['header'])}>
            <label className={styles['label']} htmlFor={htmlFor}>{ label }</label>
            { secure && <Icon className={styles['icon-lock']} icon='lock' /> }
          </div>
        }

        { mask ?
          <InputMask
            className={styles['input']}
            type='text'
            placeholder={placeholder}
            mask={mask}
            maskChar={maskChar}
            id={id}
            {...input}
          />
          :
          <input
            className={styles['input']}
            type='text'
            placeholder={placeholder}
            id={id}
            {...input}
          />
        }
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
}

TextField.propTypes = {
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
   * Mask the input
   */
  mask: PropTypes.string,
  /**
   * Specific the maskChar (must have `mask` set for this to be applied)
   */
  maskChar: PropTypes.string,

  /**
   * Adds a lock to the label.
   */
  secure: PropTypes.bool,

  /**
   * id added to the `input` node
   */
  id: PropTypes.string,
};

TextField.defaultProps = {
  placeholder: 'Placeholder',
  errorMessage: false,
};

export default TextField;
