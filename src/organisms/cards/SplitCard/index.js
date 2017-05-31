import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';

import styles from './split_card.module.scss';

function SplitCard( props ) {
  const {
    columnLeft,
    columnRight,
    footerLeft,
    footerRight,
    onClick,
    onClick2,
    onClose,
    className
  } = props;

  const hasFooter = () => footerLeft || footerRight;

  return (
    <div className={classnames(styles['split-card'], className)}>
      { onClose && <Icon icon='xIcon' className={styles['icon-close']} onClick={onClose} /> }

      <div className={styles['row']}>
        <div className={styles['col']}>
          { columnLeft }
        </div>

        <div className={classnames(styles['col'], styles['col-r'])}>
          { columnRight }
        </div>
      </div>

      { hasFooter() &&
        <footer className={styles['footer']}>
          <div className={styles['col']}>
            <a className={styles['link']} onClick={onClick}>{ footerLeft }</a>
          </div>

          <div className={classnames(styles['col'], styles['col-r'])}>
            <a className={styles['link']} onClick={onClick2}>{ footerRight }</a>
          </div>
        </footer>
      }

    </div>
  );
}

SplitCard.propTypes = {
  /**
   * class name added to class set
   */
  className: PropTypes.string,

  /**
   * callback passed to xIcon to close card
   */
  onClose: PropTypes.func.isRequired,

  /**
   *  Left column node
   */
  columnLeft: PropTypes.node,

  /**
   *  Right column node
   */
  columnRight: PropTypes.node,

  /**
   * footer text displayed below left column
   */
  footerLeft: PropTypes.string,

  /**
   * footer text displayed below right column
   */
  footerRight: PropTypes.string,

  /**
   * callback passed to the onclick of footerText1
   */
  onClick: PropTypes.func,

  /**
   * callback passed to the onclick of footerText2
   */
  onClick2: PropTypes.func,
};

export default SplitCard;
