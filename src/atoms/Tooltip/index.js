import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import Modal from 'molecules/Modal';
import styles from './tooltip.module.scss';

/* eslint-disable */
class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false
    }

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
      inline
    } = this.props;

    return (
      <div
        onClick={this.openModal}
        className={classnames(
          styles['tooltip-wrapper'],
          inline && styles[`inline-${inline}`],
          className
        )}
      >
        <Icon icon='questionMark' className={styles['tooltip']} />
        <div
          className={classnames(
            styles['hover-message'],
            left && styles['left'],
            right && styles['right'],
            inline && styles[`inline-hover-${inline}`]
          )}
        >
          { children }
        </div>
        <Modal
          header="Learn more"
          isOpen={ this.state.modalIsOpen }
          contentLabel=''
          onRequestClose={this.closeModal}
        >
          { children }
        </Modal>
      </div>
    )
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
  /**
   * Inlines the tooltip & adds appropriate margin
   */
  inline: PropTypes.oneOf([ 'left', 'right' ])
};

export default Tooltip;
