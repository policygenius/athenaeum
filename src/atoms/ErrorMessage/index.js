/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import delay from 'lodash/delay';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Text from 'atoms/Text';
import styles from './error_message.module.scss';

const hocErrorMessage = BaseComponent => props =>
  <TransitionGroup>
    { props.condition && <BaseComponent {...props} /> }
  </TransitionGroup>;


class ErrorMessage extends Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  componentDidEnter() {
    delay(() => this.setState({ visible: true }));
  }

  componentWillLeave(callback) {
    this.setState({ visible: false });
    delay(callback, 500);
  }

  render() {
    return (
      <div className={classnames(styles[this.props.type], this.state.visible && styles['visible'])}>
        <Text size={10} font='b'>
          { this.props.message }
        </Text>
      </div>
    );
  }
}

ErrorMessage.propTypes = {
  /**
   * the message to be displayed for the error or warning
   */
  message: PropTypes.node,
  /**
   * the condition for which the message will be shown or hidden
   */
  condition: PropTypes.bool,
  type: PropTypes.oneOf([ 'error', 'warning' ]),
};

ErrorMessage.defaultProps = {
  type: 'error'
};

export default hocErrorMessage(ErrorMessage);
