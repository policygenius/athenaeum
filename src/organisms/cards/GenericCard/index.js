import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';
import styles from './generic_card.module.scss';

function renderFooter(text, onClick) {
  if (!text) return null;

  return (
    <footer
      className={classnames(styles['footer'], styles['col'] )}
    >
      <LinkWrapper onClick={onClick} type='secondary'>
        <Text size={10} font='b'>
          { text }
        </Text>
      </LinkWrapper>
    </footer>
  );
}

function GenericCard( props ) {
  const {
    className,
    children,
    icon,
    onIconClick,
    footerText,
    onFooterLinkClick,
    variant,
  } = props;

  const classes = [
    styles['generic-card'],
    variant && styles[variant],
    className,
  ];

  const iconProps = {
    icon,
    className: styles['icon'],
  };

  if (onIconClick) {
    iconProps.onClick = onIconClick;
    iconProps.className = classnames(styles['icon'], styles['icon-click']);
  }

  return (
    <div className={classnames(...classes)}>
      { icon && <Icon {...iconProps} /> }
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
   * Adds icon to upper right corner. See [Icon](#icon) for available values
   */
  icon: PropTypes.string,

  /**
   * callback passed to the icon
   */
  onIconClick: PropTypes.func,

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
    'checkout',
    'box',
    'mobile',
    'calculator',
  ]),
};

export default GenericCard;
