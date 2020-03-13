import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'atoms/Button';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';
import Text from 'atoms/Text';

import styles from './footer.module.scss';

function renderLinks(linksArr) {
  if (!linksArr || linksArr.length === 0) return null;

  function renderLink(link, index) {
    return (
      <li key={`link-${index}`} className={styles['trust-link']}>
        <LinkWrapper href={link.href} type='secondary'>{link.text}</LinkWrapper>
      </li>
    );
  }

  return (
    <ul className={styles['trust-links']}>
      { linksArr.map(renderLink) }
    </ul>
  );
}

function formatPhoneNumber(number) {
  const numberArray = number.split(' ');

  if (numberArray.length === 1) return numberArray.join();

  return numberArray.join('-');
}

function renderPhoneInfo(phoneNumber, hours) {
  if (!phoneNumber) { return null; }

  return (
    <Col className={styles['phone-lockup']}>
      <LinkWrapper
        href={`tel:${formatPhoneNumber(phoneNumber)}`}
        className={classnames(styles['icon-text-wrapper'], styles['link'])}
        type='resource'
      >
        <Icon
          icon='phone'
          width='24px'
          height='24px'
          className={styles['icon']}
        />

        <Text
          size={8}
          font='a'
        >
          {phoneNumber}
        </Text>
      </LinkWrapper>

      <div className={styles['mobile-questions']}>
        <Text
          size={7}
          font='a'
        >
          Questions?
        </Text>

        <Text
          size={10}
          className={styles['tablet-phone-number']}
        >
          {phoneNumber}
        </Text>
      </div>

      <Spacer size={6} />

      <div className={styles['hours']}>
        {
          hours && hours.map((hour) => (
            <Text
              key={hour}
              size={10}
              font='b'
            >
              {hour}
            </Text>
          ))
        }
      </div>
    </Col>
  );
}

function Footer(props) {
  const {
    className,
    phoneNumber,
    emailAddress,
    links,
    onClickChat,
    hours,
    constrainWidth
  } = props;

  const layoutClasses = classnames(
    styles['footer-layout'],
    constrainWidth && styles['footer-layout-constrain']
  );

  return (
    <div className={classnames(styles['footer'], className)}>
      <Layout
        className={layoutClasses}
        smallCols={[ 12 ]}
        mediumCols={[ 3 ]}
        largeCols={[ 4 ]}
        fullwidth
      >

        { renderPhoneInfo(phoneNumber, hours) }

        <Col className={styles['actions']}>
          <LinkWrapper
            className={classnames(styles['icon-text-wrapper'], styles['link'])}
            onClick={onClickChat}
            type='resource'
          >
            <Icon
              icon='chat'
              width='24px'
              height='24px'
              className={styles['icon']}
            />
            <Text
              size={8}
              font='a'
            >
              Live chat
            </Text>
          </LinkWrapper>

          <Spacer size={24} />

          <LinkWrapper
            href={`mailto:${emailAddress}`}
            className={classnames(styles['icon-text-wrapper'], styles['link'])}
            type='resource'
          >
            <Icon
              icon='email'
              width='24px'
              height='24px'
              className={styles['icon']}
            />
            <Text
              size={8}
              font='a'
            >
              {emailAddress}
            </Text>
          </LinkWrapper>
        </Col>

        <Col className={styles['mobile-actions']}>
          <Spacer size={18} />

          <LinkWrapper
            href={`tel:${phoneNumber}`}
          >
            <Button variant='info' outline>
              {phoneNumber}
            </Button>
          </LinkWrapper>

          <Spacer size={18} />

          <Button
            variant='info'
            outline
            onClick={onClickChat}
          >
            Live Chat
          </Button>

          <Spacer size={18} />

          <LinkWrapper
            href={`mailto:${emailAddress}`}
          >
            <Button variant='info' outline>
              {emailAddress}
            </Button>
          </LinkWrapper>

          <Spacer size={36} />
        </Col>

        <Col
          className={styles['trust']}
          mediumCols={6}
        >
          <div className={styles['trust-logos']}>
            <Icon className={classnames(styles['trust-logo'], styles['logo-bbb'])} icon='bbb' />
          </div>

          <Spacer size={6} />

          { renderLinks(links) }
        </Col>

        <Col className={styles['tablet-action']}>
          <Button
            variant='info'
            outline
            onClick={onClickChat}
          >
            Chat Now
          </Button>
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
   * Formatted Contact phone number. Can be wrapped in additional markup
   */
  phoneNumber: PropTypes.node,

  /**
   * Function to trigger chat.
   */
  onClickChat: PropTypes.func.isRequired,

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
   * Sets the email address
   */
  emailAddress: PropTypes.string,

  /**
   * Sets the Policygenius hours. Each item in the array is displayed as a new line
   */
  hours: PropTypes.array,

  /**
   * constrains Footer to 1280px and centers content
   */
  constrainWidth: PropTypes.bool,
};

Footer.defaultProps = {
  emailAddress: 'team@policygenius.com'
};

export default Footer;
