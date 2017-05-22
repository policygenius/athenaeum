import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import Modal from 'molecules/Modal';
import styles from './tooltip.module.scss';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    (window.innerWidth <= 768) && this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const {
      children,
      className,
      left,
      right,
    } = this.props;

    return (
      <span
        onClick={this.openModal}
        className={classnames(
          styles['tooltip-wrapper'],
          className
        )}
      >
        <Icon icon='questionMark' className={styles['tooltip']} />
        <span
          className={classnames(
            styles['hover-message'],
            left && styles['left'],
            right && styles['right'],
          )}
        >
          { children }
        </span>
        <Modal
          header='Learn more'
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}
          contentLabel=''
        >
          {children}
        </Modal>
      </span>
    );
  }
}


Tooltip.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * render left-side variant
   */
  left: PropTypes.bool,

  /**
   * render right-side variant
   */
  right: PropTypes.bool,
};

export default Tooltip;
