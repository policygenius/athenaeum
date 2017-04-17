import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import TextLockup from 'molecules/TextLockup';
import styles from './generic_card.module.scss';

function GenericCard( props ) {
  const {
    header,
    subheader,
    onClose,
    footerText,
    onFooterLinkClick,
    className
  } = props;

  return (
    <div className={classnames( styles.generic_card, className )}>
      <Icon
        icon='xIcon'
        className={styles['icon-close']}
        onClick={onClose}
      />

      <div className={styles.col}>
        <TextLockup
          variant='A'
          header={header}
          subheader={subheader}
        />
      </div>

      <footer
        className={classnames( styles.footer, styles.col )}
        onClick={onFooterLinkClick}
      >
        <a className={styles.link}>{ footerText }</a>
      </footer>
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
  onClose: PropTypes.func.isRequired,

  /**
   * header text for card
   */
  header: PropTypes.string.isRequired,

  /**
   * subheader text for card
   */
  subheader: PropTypes.string,

  /**
   * text displayed on footer
   */
  footerText: PropTypes.string.isRequired,

  /**
   * callback passed to footer
   */
  onFooterLinkClick: PropTypes.func
};

export default GenericCard;
