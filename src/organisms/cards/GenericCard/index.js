import React from 'react';
import TextLockup from 'molecules/TextLockup';
import styles from './generic_card.module.scss';
import classnames from 'classnames';

function GenericCard ( props ) {
  const {
    header,
    subheader,
    onClose,
    footerText,
    onFooterLinkClick
  } = props;

  return (
    <div className={ styles.generic_card }>
      <Icon
        icon='xIcon'
        className={ styles['icon-close'] }
        onClick={ onClose }
      />
      <div className={ styles.col }>
        <TextLockup
          type='A'
          header={ header }
          subheader={ subheader }
        />
      </div>
      <footer
        className={ classnames( styles.footer, styles.col ) }
        onClick={ onFooterLinkClick }
      >
        <a className={ styles.link }>{ footerText }</a>
      </footer>
    </div>
  )
}

GenericCard.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  header: React.PropTypes.string.isRequired,
  subheader: React.PropTypes.string,
  footerText: React.PropTypes.string.isRequired,
  onFooterLinkClick: React.PropTypes.func
}

export default GenericCard;
