import React from 'react';
import TextLockup from 'components/text-lockups/TextLockup';
import styles from './percentage_card.module.scss';

function PercentageCard ( props ) {
  const {
    header1,
    subheader1,
    percent,
    subheader2,
    footerText1,
    footerText2 } = props;

  return (
    <div className={ styles.percentage_card }>
      <div className={ styles.close_wrapper }>
        <span className={ styles.close }></span>
      </div>
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
  header1: React.PropTypes.string.isRequired,
  subheader1: React.PropTypes.string.isRequired,
  percent: React.PropTypes.number.isRequired,
  subheader2: React.PropTypes.string.isRequired,
  footerText1: React.PropTypes.string.isRequired,
  footerText2: React.PropTypes.string.isRequired
}

export default PercentageCard;
