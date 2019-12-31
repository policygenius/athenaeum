import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorMessage from 'atoms/ErrorMessage';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Text from 'atoms/Text';
import { renderTooltip } from 'utils/fieldUtils';

import styles from './checkbox_wrapper.module.scss';
import BaseFieldGroup from '../util/BaseFieldGroup';

class CheckboxWrapper extends BaseFieldGroup {
  get childCols() {
    const { children } = this.props;

    const numberOfChildren = React.Children.toArray(children).length;

    const cols = {
      smallCols: [ 12 ],
    };

    if (numberOfChildren > 1) {
      cols.mediumCols = [ 6 ];
    }

    return cols;
  }

  render() {
    const {
      label,
      children,
      tooltip,
      subLabel,
      footerBox,
      meta,
      input,
      className,
      fieldRef,
      noFieldBorders,
    } = this.props;

    const showErrorMessage = !meta.active && (meta.visited || meta.submitFailed);
    const message = meta && showErrorMessage && (meta.error || meta.warning);

    const classes = [
      styles['checkbox-list'],
      meta && meta.active && styles['focused'],
      meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
      noFieldBorders && styles['no-field-borders'],
      className,
    ];

    return (
      <div
        ref={(ref) => {
          this.wrapperReference = ref;
          fieldRef;
        }}
      >
        <div
          className={classnames(...classes)}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onFocus={input && input.onFocus}
        >
          <div className={styles['header']}>
            <div className={styles['label-wrapper']}>
              { /* eslint-disable-next-line jsx-a11y/label-has-for */ }
              { label &&<label htmlFor='checkbox' className={styles['label']}>{label}</label> }
              { tooltip && renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
            </div>

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
          <Layout
            {...this.childCols}
            fullwidth
            className={styles.content}
          >
            {
              React.Children.map(children, (child) => (
                <Col className={styles.checkbox}>
                  {
                    React.cloneElement(child, {
                      ...child.props,
                      onBlur: this.handleBlur,
                    })
                  }
                </Col>
              ))
            }
          </Layout>

          {
            footerBox && (
              <div className={styles['footer-box']}>
                {
                  React.cloneElement(footerBox, {
                    ...footerBox.props,
                    onBlur: this.handleBlur,
                  })
                }
              </div>
            )
          }
        </div>
        <ErrorMessage
          condition={!!message}
          message={message}
        />
      </div>
    );
  }
}

CheckboxWrapper.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Text to appear directly under the label
   */
  subLabel: PropTypes.string,

  /**
   * CheckBox component to be placed at very bottom of Wrapper
   */
  footerBox: PropTypes.node,

  /**
   * ReduxForm meta props
   */
  meta: PropTypes.object,

  /**
   * ReduxForm input props
   */
  input: PropTypes.object,

  /**
   * Adds tooltip to wrapper
   */
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
};

export default CheckboxWrapper;
