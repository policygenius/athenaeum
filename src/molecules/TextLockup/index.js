import React from 'react';
import PropTypes from 'prop-types';
import styles from './text-lockups.module.scss';
import classnames from 'classnames';

function TextLockup ( props ) {

  const { type, children } = props;
  const {
    header,
    subheader } = props;

  switch ( type ) {
    case 'A':
      return (
        <div className={ styles[type] }>
          <h4 className={ styles['header'] }>{ header }</h4>
          <h5 className={ styles['subheader'] }>{ subheader }</h5>
        </div>
      )

    case 'B':
      return (
        <div className={ styles[type] }>
          <h4 className={ styles['header'] }>{ header }</h4>
          <h5 className={ styles['subheader'] }>{ subheader }</h5>
        </div>
      )

    default:
      return (
        <div className={ styles[type] }>
          { children }
        </div>
      )
  }
}

TextLockup.propTypes = {
  /**
   * Possible card types are: `1`
   *
   */
  type: PropTypes.string.isRequired
  // header: PropTypes.string.isRequired,
  // subheader: PropTypes.string.isRequired
}

export default TextLockup;

