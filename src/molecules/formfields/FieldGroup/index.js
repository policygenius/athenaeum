/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Col from 'atoms/Layout/Col';
import Layout from 'atoms/Layout';
import Text from 'atoms/Text';
import ErrorMessage from 'atoms/ErrorMessage';

import styles from './field_group.module.scss';

const renderLabels = (labels) => {
  const labelCols = 12 / labels.length;

  return (
    <Layout
      smallCols={[ labelCols ]}
      fullwidth
      className={styles['label-wrapper']}
    >
      {
        labels.map((label, idx) => (
          <div
            key={`field--label-${idx}`}
            className={styles['label']}
          >
            <label>{label.header}</label>
            {
              label.subLabel && (
                <Text
                  size={10}
                  font='b'
                >
                  {label.subLabel}
                </Text>
              )
            }
          </div>
        ))
      }
    </Layout>
  );
};

const wrapChild = (child) => (
  <Col className={styles['field']}>
    {
      React.cloneElement(
        child,
        {
          noBaseStyle: true,
        }
      )
    }
  </Col>
);

function FieldGroup(props) {
  const {
    children,
    className,
    labels,
    input,
    meta,
  } = props;

  const childCols = 12 / children.length;

  const showErrorMessage = (meta.visited && !meta.active) || (meta.submitFailed && !meta.active);
  const message = meta && showErrorMessage && (meta.error || meta.warning);

  const classes = [
    styles['field-group'],
    meta && meta.active && styles['focused'],
    meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
    className,
  ];

  return (
    <div>
      <div
        className={classnames(...classes)}
        onBlur={(e) => {
          if (!e.relatedTarget) input.onBlur();
        }}
        onFocus={input && input.onFocus}
      >
        { renderLabels(labels) }

        <Layout
          smallCols={[ childCols ]}
          fullwidth
        >
          {
            React.Children.map(children, wrapChild)
          }
        </Layout>
      </div>

      <ErrorMessage
        condition={!!message}
        message={message}
      />
    </div>
  );
}

FieldGroup.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Labels to place above each field. The order of the labels must match the order of the child fields.
   */
  labels: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    subLabel: PropTypes.string,
  })),

  /**
   * Meta object is passed from reduxForm
   */
  meta: PropTypes.object,

  /**
   * Input object is passed from reduxForm
   */
  input: PropTypes.object
};

FieldGroup.defaultProps = {

  // Place any default props here.
};

export default FieldGroup;
