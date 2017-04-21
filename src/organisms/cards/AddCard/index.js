import React from 'react';
import PropTypes from 'prop-types';
import styles from './add_card.module.scss';
import classnames from 'classnames';

function AddCard ( props ) {
  const {
    className,
    cardText,
    icon
  } = props;

  return (
    <div className={ classnames(styles.add, className) }>
      <Icon
        icon={ icon }
        className={ styles.icon }
      />
      { cardText }
    </div>
  )
}

AddCard.propTypes = {
  cardText: PropTypes.string,
  /**
   * This is the icon name from the [Icon component](/#icon).
   */
  icon: PropTypes.string
}

export default AddCard;
