import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactModal from 'react-modal';

import Text from 'atoms/Text';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import MobileMenu from 'molecules/MobileMenu';
import styles from './modal.module.scss';

const wrapChild = (child) => {
  if (child.type === MobileMenu) return child;

  return React.createElement(
    'div',
    {
      className: classnames(
        styles['section'],
      )
    },
    child
  );
};

function Modal(props) {
  const {
    children,
    className,
    contentLabel,
    header,
    hideX,
    isOpen,
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
      className={classnames(styles['modal'], styles[variant], className)}
      overlayClassName={styles['overlay']}
    >
      <div className={styles['dialog']}>
        <div className={styles['body']}>
          <Layout
            smallCols={[ 11, 1 ]}
          >
            <Text
              type={4}
              font='a'
            >
              {header}
            </Text>

            <Col
              className={styles['close-col']}
            >
              {
                !hideX &&
                  <Icon
                    icon='close'
                    className={styles['close']}
                    onClick={onRequestClose}
                  />
              }
            </Col>
          </Layout>

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
  contentLabel: PropTypes.string.isRequired,

  /**
   * Hide the X icon to close the modal
   */
  hideX: PropTypes.bool,

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
   * variant for modal - options are `simple` (default), `large` & `mobile`
   */
  variant: PropTypes.oneOf([ 'simple', 'large', 'mobile', 'mobile-large' ]),
};

Modal.defaultProps = {
  variant: 'simple',
  hideX: false
};

export default Modal;
