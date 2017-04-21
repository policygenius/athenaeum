import React from 'react';
import PropTypes from 'prop-types';
import TextLockup from 'molecules/TextLockup';
import styles from './percentage_card.module.scss';

function PercentageCard ( props ) {
  const {
    header1,
    subheader1,
    percent,
    subheader2,
    footerText1,
    onClose,
    footerText2
  } = props;

  return (
    <div className={ styles.percentage_card }>
      <Icon
        icon='xIcon'
        className={ styles['icon-close'] }
        onClick={ onClose }
      />
      <div className={ styles.row }>
        <div className={ styles.col }>
          <TextLockup
            type='A'
            header={ header1 }
            subheader={ subheader1 }
          />
        </div>
        <div className={ styles.percentage_col }>
          <TextLockup
            type='B'
            header={ percent + '%' }
            subheader={ subheader2 }
          />
        </div>
      </div>
      <footer className={ styles.footer }>
        <div className={ styles.col }>
          <a className={ styles.link }>{ footerText1 }</a>
        </div>
        <div className={ styles.percentage_col }>
          <a className={ styles.link }>{ footerText2 }</a>
        </div>
      </footer>
    </div>
  )
}

PercentageCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  header1: PropTypes.string.isRequired,
  subheader1: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  subheader2: PropTypes.string.isRequired,
  footerText1: PropTypes.string.isRequired,
  footerText2: PropTypes.string.isRequired
}

export default PercentageCard;
