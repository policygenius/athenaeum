import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Button from 'atoms/Button';
import LinkWrapper from 'atoms/LinkWrapper';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Spacer from 'atoms/Spacer';
import Hide from 'wrappers/Hide';

import styles from './product_intro.module.scss';

function ProductIntro(props) {
  const {
    intro,
    headerText
  } = props;

  const mediumCols = intro.cta ? [ 7, 5 ] : [ 12 ];

  return (
    <Layout
      smallCols={[ 12 ]}
      mediumCols={mediumCols}
      largeCols={[ 12 ]}
      fullwidth
      className={styles['product-intro-wrapper']}
    >
      <div className={styles['product-intro-lockup']}>
        <Icon
          icon={intro.icon}
          height='100px'
          width='100px'
          className={styles['product-intro-icon']}
        />
        <Text
          type={4}
          font='a'
          className={styles['header-text']}
        >
          { headerText }
        </Text>
      </div>

      { intro.cta &&
      <div className={styles['product-intro-button-wrapper']}>
        <Hide hideOn='tablet desktop'>
          <Spacer size={18} />
        </Hide>
        <Hide hideOn='mobile tablet'>
          <Spacer size={12} />
        </Hide>

        <LinkWrapper
          href={intro.linkHref}
          className={styles['product-intro-button']}
        >
          <Button rel='nofollow'>{ intro.cta }</Button>
        </LinkWrapper>

        <Spacer size={18} />

        {/* Need correct link for the Guide */}
        <LinkWrapper
          type='secondary'
          href={intro.secondaryLinkHref}
          className={styles['product-intro-link']}
        >
          <Text type={10} font='b'>
            Read Our Guide
          </Text>
        </LinkWrapper>
      </div>
      }

      <Col
        smallCol={12}
      >
        <Hide hideOn='tablet desktop'>
          <Spacer size={24} />
        </Hide>
        <Hide hideOn='mobile desktop'>
          <Spacer size={60} />
        </Hide>
      </Col>
    </Layout>
  );
}

ProductIntro.propTypes = {
  intro: PropTypes.shape({
    cta: PropTypes.string,
    icon: PropTypes.string,
    linkHref: PropTypes.string,
  }),
  headerText: PropTypes.string,
};

export default ProductIntro;
