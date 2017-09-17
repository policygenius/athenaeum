import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Col, Layout } from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';
import Section from 'atoms/Section';
import QuotesForm from 'organisms/forms/QuotesForm';

import styles from './hero.module.scss';

function Hero(props) {
  const {
    className,
    title,
    subtitle,
    linkText,
    backgroundImageUrl
  } = props;

  const classes = [
    styles['hero'],
    className,
  ];

  return (
    <Section className={classnames(...classes)} backgroundImageUrl={backgroundImageUrl}>
      <Layout mediumCols={[ 6 ]}>
        <Col>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <LinkWrapper>{linkText}</LinkWrapper>
          <QuotesForm />
        </Col>
      </Layout>
    </Section>
  );
}


Hero.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  linkText: PropTypes.string
};

Hero.defaultProps = {
  // Place any default props here.
};

export default Hero;
