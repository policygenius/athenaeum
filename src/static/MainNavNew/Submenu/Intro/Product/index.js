import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Button from 'atoms/Button';
import LinkWrapper from 'atoms/LinkWrapper';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Spacer from 'atoms/Spacer';
import StyledWrapper from 'atoms/StyledWrapper';

import styles from '../intro.module.scss';
import {
  productIntroWrapper,
  productIntroLockup,
  productIntroButtonWrapper,
  buttonSpacer,
  introSpacer
} from './styles';

function ProductIntro(props) {
  const {
    intro,
    headerText
  } = props;

  const mediumCols = intro.cta ? [ 7, 5 ] : [ 12 ];

  return (
    <StyledWrapper
      css={productIntroWrapper}
      component={Layout}
      smallCols={[ 12 ]}
      mediumCols={mediumCols}
      largeCols={[ 12 ]}
      fullwidth
    >
      <StyledWrapper css={productIntroLockup}>
        <Icon
          icon={intro.icon}
          height='100px'
          width='100px'
          className='product-intro-icon'
        />
        <Text
          type={4}
          font='a'
          className='header-text'
        >
          { headerText }
        </Text>
      </StyledWrapper>

      { intro.cta &&
      <StyledWrapper css={productIntroButtonWrapper}>
        <StyledWrapper css={buttonSpacer} />

        <LinkWrapper
          href={intro.linkHref}
          className='product-intro-button'
        >
          <Button variant='solid-orange'>{ intro.cta }</Button>
        </LinkWrapper>

        <Spacer size={18} />

        {/* Need correct link for the Guide */}
        <LinkWrapper
          type='secondary'
          href={intro.linkHref}
          className={styles['product-intro-link']}
        >
          <Text type={10} font='b'>
            Read Our Guide
          </Text>
        </LinkWrapper>
      </StyledWrapper>
      }

      <Col
        smallCol={12}
      >
        <StyledWrapper css={introSpacer} />
      </Col>
    </StyledWrapper>
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
