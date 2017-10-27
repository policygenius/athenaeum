import React from 'react';
import { generate } from 'shortid';

import Icon from 'atoms/Icon';
import List from 'atoms/List';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import LinkWrapper from 'atoms/LinkWrapper';
import StyledWrapper from 'atoms/StyledWrapper';

import { links, linksList } from './styles';
import { footerLinkItems } from '../data/links';

const Links = () => (
  <Hide hideOn="small" >
    <StyledWrapper
      css={links}
    >
      <Icon
        icon="madeInNy"
        height="48px"
        width="48px"
        className="made-in-ny-icon"
      />
      <StyledWrapper
        css={linksList}
        component={List}
        noBullets
        horizontal={{ spaceBetween: 18 }}
      >
        {
              footerLinkItems.map(link =>
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
  </Hide>
  );

export default Links;
