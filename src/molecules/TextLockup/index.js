import React from 'react';
import PropTypes from 'prop-types';
import TextComponent from 'atoms/TextComponent';
import styles from './text-lockups.module.scss';

function TextLockup( props ) {
  const {
    type,
    children,
    header,
    subheader
  } = props;

  switch ( type ) {
    case 'A':
      return (
        <div className={styles[type]}>
          <TextComponent
            className={styles['header']}
            tag={'h4'}
            type={4}
          >
            { header }
          </TextComponent>

          <TextComponent
            className={styles['subheader']}
            tag={'h5'}
            type={4}
          >
            { subheader }
          </TextComponent>
        </div>
      );

    case 'B':
      return (
        <div className={styles[type]}>
          <TextComponent
            className={styles['header']}
            tag={'h4'}
            type={4}
          >
            { header }
          </TextComponent>

          <TextComponent
            className={styles['subheader']}
            tag={'h5'}
            type={4}
          >
            { subheader }
          </TextComponent>
        </div>
      );

    default:
      return (
        <div className={styles[type]}>
          { children }
        </div>
      );
  }
}

TextLockup.propTypes = {
  /**
   * Possible card types are: `1`
   *
   */
  type: PropTypes.string.isRequired,

  /**
   * header text displayed in lockup
   */
  header: PropTypes.string,

  /**
   * subheader text displayed in lockup
   */
  subheader: PropTypes.string
};

export default TextLockup;

