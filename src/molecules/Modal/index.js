import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactModal from 'react-modal';
import TextComponent from 'atoms/TextComponent';
import Icon from 'atoms/Icon';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import styles from './modal.module.scss';

const wrapChild = child => React.cloneElement(
  child,
  {
    className: classnames(
      styles['section'],
    )
  }
);

function Modal(props) {
  const {
    children,
    className,
    header,
    isOpen,
    contentLabel,
    onAfterOpen,
    onRequestClose,
    variant
  } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={classnames(styles.modal, styles[variant], className)}
      overlayClassName={styles.overlay}
    >
      <div className={styles.dialog}>
        <div className={styles.header}>
          <Layout
            fullwidth
            smallCols={[ 11, 1 ]}
          >
            <TextComponent
              type={2}
              light
            >
              {header}
            </TextComponent>

            <Col
              fullwidth
              style={{
                alignSelf: 'center'
              }}
            >
              <Icon
                icon='close'
                className={styles.close}
                onClick={onRequestClose}
              />
            </Col>
          </Layout>
        </div>

        <div className={styles.body}>
          {React.Children.map(children, wrapChild)}
        </div>
      </div>
    </ReactModal>
  );
}


Modal.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Provides header text for modal
   */
  header: PropTypes.string,

  /**
   * label passed to ReactModal `contentLabel`
   */
  contentLabel: PropTypes.string,

  /**
   * Boolean to determine modal open/closed
   */
  isOpen: PropTypes.bool,

  /**
   * callback passed to ReactModal `onAfterOpen`
   */
  onAfterOpen: PropTypes.func,

  /**
   * callback passed to ReactModal `onRequestClose` and to modal 'X'
   */
  onRequestClose: PropTypes.func,

  /**
   * variant for modal - options are `simple` (default) & `large`
   */
  variant: PropTypes.string,
};

Modal.defaultProps = {
  variant: 'simple'
};

export default Modal;
