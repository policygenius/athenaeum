import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'atoms/Button';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './footer.module.scss';

function renderLinks(linksArr) {
  if (!linksArr || linksArr.length === 0) return null;

  function renderLink(link, index) {
    return (
      <li key={`link-${index}`} className={styles['trust-link']}>
        <LinkWrapper href={link.href}>{link.text}</LinkWrapper>
      </li>
    );
  }

  return (
    <ul className={styles['trust-links']}>
      { linksArr.map(renderLink) }
    </ul>
  );
}

function Footer(props) {
  const {
    className,
    phoneNumber,
    emailAddress,
    links,
    onClickChat,
  } = props;

  return (
    <div className={classnames(styles['footer'], className)}>
      <Layout
        className={styles['footer-layout']}
        mediumCols={[ 6 ]}
        smallCols={[ 12 ]}
        fullwidth
      >
        <Col
          className={classnames(styles['footer-help'], styles['help'])}
        >
          <div className={styles['help-layout']}>
            { phoneNumber &&
              <h4 className={styles['help-phone']}>
                Questions?<br />
                {phoneNumber}
              </h4>
            }

            { onClickChat &&
              <Button
                className={styles['help-button']}
                variant='outline'
                onClick={onClickChat}
              >
                Expert Chat
              </Button>
            }
          </div>

          { emailAddress &&
            <div className={styles['help-text']}>
              { 'Experts available weekdays 9am-7pm ET - 24/7 by ' }
              <LinkWrapper href={`mailto:${emailAddress}`}>email.</LinkWrapper>
            </div>
          }
        </Col>

        <Col className={classnames(styles['footer-trust'], styles['trust'])}>
          <Layout>
            <Col fullwidth className={styles['trust-logos']}>
              <Icon className={classnames(styles['trust-logo'], styles['logo-bbb'])} icon='bbb' />
              <Icon className={classnames(styles['trust-logo'], styles['logo-norton'])} icon='norton' />
              <Icon className={classnames(styles['trust-logo'], styles['logo-digicert'])} icon='digicert' />
            </Col>

            { renderLinks(links) }
          </Layout>
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
  /**
   * Array of Links `[ { text: 'link text', href: 'http://link.com' } ]`
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string.isRequired,
    })
  ),
  /**
   * Sets the mailto: email address
   */
  emailAddress: PropTypes.string,
};

Footer.defaultProps = {
  emailAddress: 'team@policygenius.com'
};

export default Footer;
