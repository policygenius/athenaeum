import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ErrorMessage from 'atoms/ErrorMessage';
import Text from 'atoms/Text';

import styles from './split_field.module.scss';

function SplitField(props) {
  const {
    className,
    children,
    input,
    label,
    meta,
    subLabel,
  } = props;

  const numberOfChildren = React.Children.toArray(children).length;

  const wrapChild = (child) => {
    const classes = [
      styles.input,
      styles[`fields-${numberOfChildren}`],
      meta && meta.active && styles['input-focused'],
    ];

    return <div className={classnames(...classes)}>{child}</div>;
  };

  const showErrorMessage = !meta.active && (meta.visited || meta.submitFailed);

  const classes = [
    styles['split-field'],
    meta && meta.active && styles.focused,
    meta && showErrorMessage && meta.error && !meta.active && styles.hasError,
    className
  ];

  const message = meta && showErrorMessage && (meta.error || meta.warning);

  return (
    <div>
      <div
        className={classnames(...classes)}
        onBlur={(e) => {
          if (!e.relatedTarget) input.onBlur();
        }}
        onFocus={input && input.onFocus}
      >
        <div className={styles.label}>
          { /* eslint-disable jsx-a11y/label-has-for */ }
          <label htmlFor='split-field'>{label}</label>
          { /* eslint-enable jsx-a11y/label-has-for */ }
          {
            subLabel && (
              <Text
                size={10}
                font='b'
              >
                {subLabel}
              </Text>
            )
          }
        </div>
        <div className={styles['line-1']}>
          { React.Children.map(children, wrapChild) }
        </div>
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
}

SplitField.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Label.
   */
  label: PropTypes.string,

  /**
   * Label text placed underneath label.
   */
  subLabel: PropTypes.string,

  /**
   * Meta object is passed from reduxForm
   */
  meta: PropTypes.object,

  /**
   * Input object is passed from reduxForm
   */
  input: PropTypes.object,

  /**
   * Any children passed to SplitField
   */
  children: PropTypes.node,
};

export default SplitField;
