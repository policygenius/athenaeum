import React from 'react';

import Col from 'atoms/Layout/Col';
import Layout from 'atoms/Layout';
import StyledWrapper from 'atoms/StyledWrapper';

import Contact from './Contact';
import MainContent from './MainContent';
import SocialMedia from './SocialMedia';
import Links from './Links';
import Copyright from './Copyright';
import Legal from './Legal';

import { contactItems } from './data/contact';
import { footer, divider, socialMediaWrapper } from './styles';

const Footer = () =>
  (<div style={{ borderTop: '1px solid #b2b2b2' }}>
    <StyledWrapper
      css={footer}
    >
      <Layout
        mediumCols={[ 3, 1, 8 ]}
        style={{ width: '100%' }}
      >
        <Col fullwidth>
          <Contact
            contactItems={contactItems}
          />
        </Col>
        <Col style={{ display: 'flex' }}>
          <StyledWrapper
            css={divider}
            component={Col}
          />
        </Col>
        <Col>
          <MainContent />
        </Col>
        <Col
          fullwidth
          style={{
            alignSelf: 'center'
          }}
        >
          <div style={{ alignSelf: 'center' }}>
            <StyledWrapper
              css={socialMediaWrapper}
            >
              <SocialMedia />
            </StyledWrapper>
          </div>
        </Col>
        <Col />
        <Col>
          <Links />
          <Copyright />
        </Col>
      </Layout>
    </StyledWrapper>
    <Legal />
  </div>)

  ;

export default Footer;
