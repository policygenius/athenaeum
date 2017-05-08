import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactModal from 'react-modal';
import TextComponent from 'atoms/TextComponent';
import Icon from 'atoms/Icon';
import styles from './modal.module.scss';

const setWeight = weight => ({
  [weight]: true
});

function Modal(props) {
  const {
    children,
    className,
    header,
    headerWeight,
    isOpen,
    contentLabel,
    onAfterOpen,
    onRequestClose,
    variant
  } = props;

  const weight = setWeight(headerWeight);

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
          <TextComponent
            type={2}
            {...weight}
          >
            {header}
          </TextComponent>

          <Icon
            icon='close'
            className={styles.close}
            onClick={onRequestClose}
          />
        </div>

        <div className={styles.body}>
          {children}
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
   * Sets header font weight for modal header text
   */
  headerWeight: PropTypes.string,

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
   * variant for modal
   */
  variant: PropTypes.string,
};

Modal.defaultProps = {
  variant: 'simple',
  headerWeight: 'semibold'
};

export default Modal;
