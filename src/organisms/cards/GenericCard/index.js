import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import styles from './generic_card.module.scss';

function renderFooter(text, onClick) {
  if (!text) return null;

  return (
    <footer
      className={classnames(styles['footer'], styles['col'] )}
      onClick={onClick}
    >
      <a className={styles['link']}>{ text }</a>
    </footer>
  );
}

function GenericCard( props ) {
  const {
    className,
    children,
    onClose,
    footerText,
    onFooterLinkClick,
    variant,
  } = props;

  const classes = [
    styles['generic-card'],
    variant && styles[variant],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      { onClose && <Icon icon='xIcon' className={styles['icon-close']} onClick={onClose} />}
      <div className={styles['col']}>
        { children }
      </div>
      { renderFooter(footerText, onFooterLinkClick) }
    </div>
  );
}

GenericCard.propTypes = {
  /**
   * class name added to class set
   */
  className: PropTypes.string,

  /**
   * callback passed to xIcon to close card
   */
  onClose: PropTypes.func,

  /**
   * text displayed on footer
   */
  footerText: PropTypes.string,

  /**
   * callback passed to footer
   */
  onFooterLinkClick: PropTypes.func,

  /**
   * Different Variants of the generic card
   */
  variant: PropTypes.oneOf([
    'box',
  ]),
};

export default GenericCard;
