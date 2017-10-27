import React from 'react';
import { generate } from 'shortid';
import {
  List,
  Text,
  Spacer,
  LinkWrapper,
  Icon,
  Hide,
  StyledWrapper,
} from 'athenaeum';

import { legalLinkItems } from '../data/links';
import { legalWrapper, links, linksList } from './styles';

const Legal = props => (
  <Hide hideOn="small">
    <StyledWrapper
      css={legalWrapper}
    >
      <div className="legal-content">
        <Text
          type={10}
          font="a"
        >
            Security you can trust
          </Text>
        <Spacer size={6} />
        <StyledWrapper
          css={links}
        >
          <Icon
            icon="norton"
            height="80px"
            width="75px"
            className="icon"
          />
          <StyledWrapper
            css={linksList}
            component={List}
            noBullets
            horizontal={{ spaceBetween: 18 }}
          >
            {
                legalLinkItems.map(link =>
                  (<div
                    key={`link-item-${generate()}`}
                    className="link-wrapper"
                  >
                    <LinkWrapper
                      hover="float"
                      href={link.href}
                      color="primary-3"
                    >
                      <Text
                        type={10}
                        font="b"
                      >{ link.title }
                      </Text>
                    </LinkWrapper>
                  </div>)
                )
              }
          </StyledWrapper>
        </StyledWrapper>

        <Text type={10} font="b">
            Yes, we have to include some legalese down here. Read it larger on our legal page. Policygenius Inc. (“PolicyGenius”) is a licensed independent insurance broker. PolicyGenius does not underwrite any insurance policy described on this website. The information provided on this site has been developed by PolicyGenius for general informational and educational purposes. We do our best efforts to ensure that this information is up-to-date and accurate. Any insurance policy premium quotes or ranges displayed are non-binding. The final insurance policy premium for any policy is determined by the underwriting insurance company following application.
            Savings are estimated by comparing the highest and lowest price for a shopper in a given health class. For example: for a 30-year old non-smoker male in South Carolina with excellent health and a preferred plus health class, comparing quotes for a $500,000, 20-year term life policy, the price difference between the lowest and highest quotes is 60%. For that same shopper in New York, the price difference is 40%. Rates are subject to change and are valid as of 2/17/17.
          </Text>
        <Spacer size={18} />
        <Text type={10} font="b">
            Copyright PolicyGenius © 2014-2017
          </Text>
      </div>
    </StyledWrapper>
  </Hide>
  );

export default Legal;

