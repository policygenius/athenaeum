import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import classnames from 'classnames';
import ReactModal from 'react-modal';

import Text from 'atoms/Text';
import Icon from 'atoms/Icon';
import MobileMenu from 'molecules/MobileMenu';
import styles from './modal.module.scss';
import mobileScrollToInput from './util/mobileScrollToInput';
import checkiOSDevice from './util/checkiOSDevice';

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

class Modal extends React.Component {
  constructor() {
    super();
    const initialBodyOverflow = typeof document !== 'undefined' && get(document, 'body.style.overflow');

    this.state = {
      initialBodyOverflow,
    };
  }

  componentWillMount() {
    if (typeof document !== 'undefined') {
      ReactModal.setAppElement('body');
    }
  }

  componentDidMount() {
    const { enableMobileScrollToInput } = this.props;

    if (enableMobileScrollToInput) {
      const { dialogId } = this.props;

      mobileScrollToInput(dialogId);
    }
  }

  onAfterOpen = () => {
    const { onAfterOpen } = this.props;

    document.body.style.overflow = 'hidden';

    if (checkiOSDevice(navigator.userAgent)) {
      this.setState({
        windowPosition: window.pageYOffset,
      });

      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }

    if (onAfterOpen) {
      onAfterOpen();
    }
  }

  onRequestClose = () => {
    const { onRequestClose } = this.props;

    document.body.style.overflow = this.state.initialBodyOverflow;

    if (checkiOSDevice(navigator.userAgent)) {
      document.body.style.position = '';
      window.scrollTo(0, this.state.windowPosition);
    }

    if (onRequestClose) {
      onRequestClose();
    }
  }

  render() {
    const {
      children,
      className,
      contentLabel,
      header,
      hideHeader,
      hideX,
      isOpen,
      variant,
      dialogId,
    } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={this.onAfterOpen}
        onRequestClose={this.onRequestClose}
        contentLabel={contentLabel}
        className={classnames(styles['modal'], styles[variant], className)}
        overlayClassName={styles['overlay']}
        shouldFocusAfterRender={false}
      >
        <div id={dialogId} className={styles['dialog']}>
          <div className={styles['body']}>
            {
              !hideHeader &&
                <div
                  className={styles['header']}
                >
                  <div
                    className={styles['close-col']}
                  >
                    {
                      !hideX &&
                        <Icon
                          icon='close'
                          className={styles['close']}
                          onClick={this.onRequestClose}
                          width='18px'
                          height='18px'
                        />
                    }
                  </div>

                  <Text
                    type={3}
                    font='a'
                  >
                    {header}
                  </Text>

                </div>
            }
            {React.Children.map(children, wrapChild)}
          </div>
        </div>
      </ReactModal>
    );

  }
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
   * Hide the header section for modal
   */
  hideHeader: PropTypes.bool,

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
  variant: PropTypes.oneOf([ 'simple', 'large', 'x-large', 'mobile', 'mobile-large' ]),

  /**
   * Adds an `id` to the dialog box surrounding the modal content. Useful for DOM targeting
   */
  dialogId: PropTypes.string,

  /**
   * Enables the ability for the modal to scroll input fields to the center of mobile screen when soft keyboard is activate. MUST provide a `dialogId` prop for targeting inputs correctly
   */
  enableMobileScrollToInput: PropTypes.bool,
};

Modal.defaultProps = {
  variant: 'simple',
  hideX: false,
  hideHeader: false,
};

export default Modal;
