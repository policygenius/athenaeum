import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'atoms/Button';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './footer.module.scss';

function Footer(props) {
  const {
    className,
    phoneNumber,
    onClickChat,
  } = props;

  return (
    <div className={classnames(styles['footer'], className)}>
      <Layout
        className={styles['footer-layout']}
        mediumCols={[ 5 ]}
        smallCols={[ 12 ]}
        fullwidthAll
      >
        <Col className={classnames(styles['footer-help'], styles['help'])}>
          <Layout
            className={styles['help-layout']}
            mediumCols={[ 7, 5 ]}
            smallCols={[ 6 ]}
            fullwidthAll
          >
            <h4 className={styles['help-phone']}>
              Questions?<br />
              {phoneNumber}
            </h4>

            <Button
              className={styles['help-button']}
              variant='outline'
              onClick={onClickChat}
            >
              Expert Chat
            </Button>
          </Layout>

          <p className={styles['help-text']}>Experts available weekdays 9am-7pm ET - 24/7 by email.</p>
        </Col>

        <Col className={classnames(styles['footer-trust'], styles['trust'])}>
          <div className={styles['trust-logos']}>
            <Icon className={classnames(styles['trust-logo'], styles['logo-bbb'])} icon='bbb' />
            <Icon className={classnames(styles['trust-logo'], styles['logo-norton'])} icon='norton' />
          </div>

          <ul className={styles['trust-links']}>
            <li className={styles['trust-link']}><LinkWrapper href='#'>Security & Trust</LinkWrapper></li>
            <li className={styles['trust-link']}><LinkWrapper href='#'>Privacy</LinkWrapper></li>
            <li className={styles['trust-link']}><LinkWrapper href='#'>Terms of Service</LinkWrapper></li>
          </ul>
        </Col>
      </Layout>
    </div>
  );
}


Footer.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Formatted Contact phone number.
   */
  phoneNumber: PropTypes.string,
  /**
   * Function to trigger chat.
   */
  onClickChat: PropTypes.func,
};

Footer.defaultProps = {
  // Place any default props here.
};

export default Footer;
