import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import TextLockup from 'molecules/TextLockup';
import styles from './percentage_card.module.scss';

function PercentageCard( props ) {
  const {
    header1,
    subheader1,
    percent,
    subheader2,
    footerText1,
    onClose,
    footerText2,
    className
  } = props;

  return (
    <div className={classnames( styles.percentage_card, className )}>
      <Icon
        icon='xIcon'
        className={styles['icon-close']}
        onClick={onClose}
      />

      <div className={styles.row}>
        <div className={styles.col}>
          <TextLockup
            variant='A'
            header={header1}
            subheader={subheader1}
          />
        </div>
        <div className={styles.percentage_col}>
          <TextLockup
            variant='B'
            header={`${percent}%`}
            subheader={subheader2}
          />
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.col}>
          <a className={styles.link}>{ footerText1 }</a>
        </div>
        <div className={styles.percentage_col}>
          <a className={styles.link}>{ footerText2 }</a>
        </div>
      </footer>
    </div>
  );
}

PercentageCard.propTypes = {
  /**
   * class name added to class set
   */
  className: PropTypes.string,

  /**
   * callback passed to xIcon to close card
   */
  onClose: PropTypes.func.isRequired,

  /**
   * header passed to first TextLockup
   */
  header1: PropTypes.string.isRequired,

  /**
   * subheader passed to first TextLockup
   */
  subheader1: PropTypes.string.isRequired,

  /**
   * percent header passed to second TextLockup
   */
  percent: PropTypes.number.isRequired,

  /**
   * subheader to percent in second TextLockup
   */
  subheader2: PropTypes.string.isRequired,

  /**
   * footer text displayed below first TextLockup
   */
  footerText1: PropTypes.string.isRequired,

  /**
   * footer text displayed below second TextLockup
   */
  footerText2: PropTypes.string.isRequired
};

export default PercentageCard;
