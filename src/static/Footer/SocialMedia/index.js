import React from 'react';
import {
  Icon,
  List,
  LinkWrapper,
  StyledWrapper,
} from 'athenaeum';

import { iconList } from './styles.js';
import { socialMediaData } from '../data/socialMediaData';

const SocialMedia = () => (
  <StyledWrapper
    css={iconList}
    component={List}
    noBullets
    condensed
    horizontal={{ spaceBetween: 6 }}
  >
    {
        socialMediaData.map(company =>
          (<LinkWrapper
            key={`social-media-${company.name}`}
            href={company.href}
          >
            <Icon
              icon={company.name}
              height="28px"
              width="28px"
            />
          </LinkWrapper>)
        )
      }
  </StyledWrapper>
  );

export default SocialMedia;
