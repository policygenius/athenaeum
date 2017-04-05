import React from 'react';
import styles from 'cards.module.scss';

function Card ( { type, children } ) {
  return (
    <div className={ styles[type] }>{children}</div>
  )
}

Card.propTypes = {
  /**
   * Possible card types are: `add``
   *
   */
  type: React.PropTypes.string.isRequired
}

Card.defaultProps = {
  type: 'add'
}

export default Card;


