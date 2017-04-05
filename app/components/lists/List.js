import React from 'react';
import styles from '../../assets/stylesheets/components/buttons.module.scss';

function List ( { type, children } ) {
  return (
    <div className={ styles[type] }>{children}</div>
  )
}

List.propTypes = {
  /**
   * Possible button types are: `info, disabled, or default (button)`
   *
   */
  type: React.PropTypes.string.isRequired
}

List.defaultProps = {
  type: 'button'
}

export default List;


