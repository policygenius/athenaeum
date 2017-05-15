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
    text,
    links,
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

            { onClickChat &&
              <Button
                className={styles['help-button']}
                variant='outline'
                onClick={onClickChat}
              >
                Expert Chat
              </Button>
            }
          </Layout>

          { text && <p className={styles['help-text']}>{text}</p> }
        </Col>

        <Col className={classnames(styles['footer-trust'], styles['trust'])}>
          <div className={styles['trust-logos']}>
            <Icon className={classnames(styles['trust-logo'], styles['logo-bbb'])} icon='bbb' />
            <Icon className={classnames(styles['trust-logo'], styles['logo-norton'])} icon='norton' />
          </div>

          { renderLinks(links) }
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
   * Small Footer text.
   */
  text: PropTypes.string,
};

Footer.defaultProps = {
  text: 'Experts available weekdays 9-7pm EST - 24/7 by email.',
};

export default Footer;
