import React, { Component } from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';
import classnames from 'classnames';
import ReactModal from 'react-modal';
import Icon from 'atoms/Icon';
import Animate from 'atoms/Animate';
import Text from 'atoms/Text';
import styles from './loading.module.scss';
import modalStylesheet from '../Modal/modal.module.scss';

const FADE_IN = 'fadeIn';
const FADE_OUT = 'fadeOut';
const INTERVAL = 1500;

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animations: FADE_IN,
      message: props.messages[0],
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen, messages } = this.props;
    const { animations, message } = this.state;

    if (!isOpen && nextProps.isOpen) {
      this.setState({ message: messages[random(0, 4)] });
      this.interval = setInterval(() => {
        if (this.mounted) {
          this.setState({
            animations: animations === FADE_IN ? FADE_OUT : FADE_IN,
            message: animations === FADE_IN ? message : this.getNextMessage()
          });
        }
      }, INTERVAL);
    }

    if (!nextProps.isOpen) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getNextMessage() {
    const { messages } = this.props;
    const { message } = this.state;

    const currMessageIdx = messages.indexOf(message);

    let nextMessageIdx;

    if (currMessageIdx === (messages.length - 1)) {
      nextMessageIdx = 0;
    } else {
      nextMessageIdx = currMessageIdx + 1;
    }

    return messages[nextMessageIdx];
  }

  render() {
    const {
      className,
      isOpen,
      icon,
      onAfterOpen,
      onRequestClose,
    } = this.props;

    const { animations, message } = this.state;

    return (
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        className={classnames(modalStylesheet['modal'], styles['loader'], className)}
        overlayClassName={modalStylesheet['overlay']}
        contentLabel='loaderModal'
      >
        <div className={classnames(modalStylesheet['dialog'], styles['dialog'])}>
          <div className={classnames(modalStylesheet['body'], styles['body'])}>
            <div className={styles['icon']}>
              <Icon
                icon={icon}
              />
            </div>
            <Animate animations={animations}>
              <Text color='neutral-2' className={styles['message']}>
                {message}
              </Text>
            </Animate>
          </div>
        </div>
      </ReactModal>
    );
  }
}

Loading.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * This prop will set the icon loading image
   */
  icon: PropTypes.string.isRequired,

  /**
   * `messages` is an array of sentences for the loader
   */
  messages: PropTypes.array,

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
};

export default Loading;
