import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkWrapper from 'atoms/LinkWrapper';
import styles from 'organisms/cards/PlaybackCard/playback_card.module.scss';

function PlaybackCardWrapper(props) {
  const {
    children,
    className,
    logo,
    amount,
    footer,
    footerOnClick,
  } = props;

  return (
    <div className={classnames(styles['playback-wrapper'], className)}>
      <div className={styles['playback-wrapper-head']}>
        <div className={styles['logo-wrapper']}>{logo}</div>
        <div className={styles['amount']}><sup>$</sup>{amount}</div>
      </div>

      <div className={styles['playback-wrapper-body']}>
        { children }
      </div>

      <div className={styles['playback-wrapper-foot']}>
        <LinkWrapper onClick={footerOnClick}>{ footer }</LinkWrapper>
      </div>
    </div>
  );
}


PlaybackCardWrapper.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Logo for the header
   */
  logo: PropTypes.string,
  /**
   * Amount for the header.
   */
  amount: PropTypes.number,
  /**
   * Text for the footer of the playback wrapper
   */
  footer: PropTypes.string,
  /**
   * Callback for footer link
   */
  footerOnClick: PropTypes.func,
};

export default PlaybackCardWrapper;
