import React from 'react';

import Col from 'atoms/Layout/Col';
import Layout from 'atoms/Layout';
import StyledWrapper from 'atoms/StyledWrapper';

import Contact from './Contact';
import ResourceList from './ResourceList';
import SelectProduct from './SelectProduct';
import SocialMedia from './SocialMedia';
import Links from './Links';
import Copyright from './Copyright';
import Legal from './Legal';

import { contactItems } from './data/contact';
import { footer, divider, socialMediaWrapper, rightColumn } from './styles';

const Footer = () =>
  <div style={{ borderTop: '1px solid #b2b2b2' }}>
    <StyledWrapper
      css={footer}
    >
      <Layout
        mediumCols={[ 3, 1, 8 ]}
        style={{ width: '100%' }}
        fullwidth
      >
        <Col>
          <Contact
            contactItems={contactItems}
          />
        </Col>
        <StyledWrapper
          css={divider}
          component={Col}
        />
        <Col fullwidth>
          <StyledWrapper
            css={rightColumn}
            component={Layout}
            mediumCols={[ 12 ]}
            largeCols={[ 4, 8 ]}
          >
            <SelectProduct />
            <ResourceList />
          </StyledWrapper>
        </Col>
        <Col
          style={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'

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
  </div>

  ;

export default Footer;
