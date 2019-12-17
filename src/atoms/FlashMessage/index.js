import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './flash_message.module.scss';

function FlashMessage(props) {
  const {
    children,
    variant,
  } = props;

  return (
    <div className={classnames(styles['flash-message'], styles[variant])}>
      { children }
    </div>
  );
}

FlashMessage.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Possible `variant` animations are: `fadeInDown`, `fadeIn`, `slideDown`
   */
  variant: PropTypes.string
};

FlashMessage.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
};

FlashMessage.defaultProps = {
  variant: 'fadeInDown',
};

export default FlashMessage;
