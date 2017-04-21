import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import styles from './add_card.module.scss';

function AddCard( props ) {
  const {
    className,
    cardText,
    icon
  } = props;

  return (
    <div className={classnames( styles.add, className )}>
      <Icon
        icon={icon}
        className={styles.icon}
      />
      { cardText }
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
  icon: PropTypes.string
};

export default AddCard;
