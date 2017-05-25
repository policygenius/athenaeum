import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';
import styles from './add_card.module.scss';

function AddCard( props ) {
  const {
    className,
    cardText,
    icon,
    onClick,
    disabled,
  } = props;

  const classes = [
    styles['add-card'],
    disabled && styles['disabled'],
    className,
  ];

  const wrappedOnClick = () => {
    if (disabled) return undefined;

    return onClick();
  };

  return (
    <div className={classnames(...classes)} onClick={wrappedOnClick}>
      <Icon icon={icon} className={styles['icon']} />
      <TextComponent type={5} >{ cardText }</TextComponent>
    </div>
  );
}

AddCard.propTypes = {
  /**
   * text to be displayed on card
   */
  cardText: PropTypes.string,

  /**
   * class name to be added to class set
   */
  className: PropTypes.string,

  /**
   * This is the icon name from the [Icon component](/#icon).
   */
  icon: PropTypes.string,

  /**
   * onClick handler for top level div
   */
  onClick: PropTypes.func,

  /**
   * Prevents the onclick event and adds disabled class/styling.
   */
  disabled: PropTypes.bool,
};

export default AddCard;
