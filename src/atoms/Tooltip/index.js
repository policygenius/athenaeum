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
      modalIsOpen: false,
      visible: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.hide);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hide);
  }

  setWrapperRef = (node) => {
    this.ref = node;
  }

  openModal = (e) => {
    (window.innerWidth <= 768) && this.setState({
      modalIsOpen: true
    });
    this.props.onClick && this.props.onClick(e, true);
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  toggleVisibility = (e) => {
    e.stopPropagation();
    this.setState({ visible: !this.state.visible });
    this.props.onClick && this.props.onClick(e, !this.state.visible);
  };

  hide = (e) => {
    if (this.ref && !this.ref.contains(e.target)) {
      e.stopPropagation();
      this.setState({ visible: false });
    }
  };

  handleClick = e => window.innerWidth <= 768 ? this.openModal(e) : this.toggleVisibility(e);

  render() {
    const {
      children,
      className,
      left,
      right,
      text,
      hoverMessageClassName,
      inline,
      tooltipIconSize,
      revealOnClick
    } = this.props;

    return (
      <span>
        <span
          onClick={revealOnClick ? this.handleClick : this.openModal}
          className={classnames(
            !revealOnClick && styles['tooltip-wrapper'],
            this.state.visible && styles.reveal,
            inline && styles[`inline-${inline}`],
            className
          )}
          ref={this.setWrapperRef}
        >
          {
            text ||
              <Icon
                icon='tooltip'
                className={styles['tooltip']}
                inline={inline}
                height={`${tooltipIconSize}px`}
                width={`${tooltipIconSize}px`}
              />
          }
          <span
            className={classnames(
              children && styles['hover-message'],
              left && styles['left'],
              right && styles['right'],
              hoverMessageClassName
            )}
          >
            { children }
          </span>
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
  /**
   * onClick will override the default `openModal` click handler
   */
  onClick: PropTypes.func,
  /**
   * defaults to a question mark Icon
   */
  text: PropTypes.node,
  /**
   * className for the hover message
   */
  hoverMessageClassName: PropTypes.string,

  /**
   * adds margin to left or right when Tooltip is inline
   */
  inline: PropTypes.oneOf([
    'left', 'right',
  ]),

  /**
   * Changes height and width of default Tooltip icon. Provide a pixel amount as a number (without the units)
   */
  tooltipIconSize: PropTypes.number,

  /**
   * When viewport is not mobile and revealOnClick prop is present, reveals tooltip message on click only
   */
  revealOnClick: PropTypes.bool
};

Tooltip.defaultProps = {
  tooltipIconSize: 12,
};

export default Tooltip;
