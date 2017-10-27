import React from 'react';
import {
  Layout,
  Col,
  StyledWrapper,
  Text
} from 'athenaeum';

import Contact from './Contact';
import ResourceList from './ResourceList';
import SelectProduct from './SelectProduct';
import SocialMedia from './SocialMedia';
import Links from './Links';
import Copyright from './Copyright';
import Legal from './Legal';

import { contactItems } from './data/contact';
import { footer, divider, socialMediaWrapper, rightColumn } from './styles';

import { footerLinkItems, legalLinkItems } from './data/links';

const Footer = () => (
  <div style={{ borderTop: '1px solid #b2b2b2' }}>
    <StyledWrapper
      css={footer}
    >
      <Layout mediumCols={[3, 1, 8, 3, 1, 8]}>
        <Col fullwidth>
          <Contact
            contactItems={contactItems}
          />
        </Col>
        <StyledWrapper
          css={divider}
          component={Col}
          fullwidth
        />
        <Col fullwidth>
          <StyledWrapper
            css={rightColumn}
            component={Layout}
            fullwidth
            mediumCols={[12]}
            largeCols={[4, 8]}
          >
            <SelectProduct />
            <ResourceList />
          </StyledWrapper>
        </Col>
        <Col
          fullwidth
        >
          <StyledWrapper
            css={socialMediaWrapper}
          >
            <SocialMedia />
          </StyledWrapper>
        </Col>
        <Col />
        <Col fullwidth>
          <Links />
          <Copyright />
        </Col>
      </Layout>
    </StyledWrapper>
    <Legal />
  </div>
  );

export default Footer;
