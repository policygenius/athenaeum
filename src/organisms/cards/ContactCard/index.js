import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import StackedCard from 'organisms/cards/StackedCard';
import styles from './contact_card.module.scss';

function ContactCard( props ) {
  const {
    top,
    bottom,
    className,
    inverted
  } = props;

  const classes = [
    styles['contact'],
    inverted && styles['inverted'],
    className
  ];

  if (top && top.href) {
    top.onClick = null;
  }

  if (bottom && bottom.href) {
    bottom.onClick = null;
  }

  return (
    <StackedCard className={classnames(...classes)} inverted={inverted}>
      { top && (
        <a className={styles['link-row']} onClick={top.onClick} href={top.href}>
          <Icon
            icon={top.icon}
            className={styles['icon']}
          />
          { top.text }
        </a>
      )}

      { bottom && (
        <a className={styles['link-row']} onClick={bottom.onClick} href={bottom.href}>
          <Icon
            icon={bottom.icon}
            className={styles['icon']}
          />
          { bottom.text }
        </a>
      )}
    </StackedCard>
  );
}

ContactCard.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * object for top section of card
   *
   * NOTE: `href` overrides `onClick`
   */
  top: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
  }),

  /**
   * object for bottom section of card
   *
   * NOTE: `href` overrides `onClick`
   */
  bottom: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
  }),

  /**
   * Inverted color scheme.
   */
  inverted: PropTypes.bool
};

ContactCard.defaultProps = {
  inverted: false
};

export default ContactCard;
