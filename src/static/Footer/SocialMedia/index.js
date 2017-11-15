import React from 'react';

import Icon from 'atoms/Icon';
import List from 'atoms/List';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './social-media.module.scss';
import { socialMediaData } from '../data/socialMediaData';

const SocialMedia = () =>
  <List
    className={styles['icon-list']}
    noBullets
    condensed
    horizontal={{ spaceBetween: 6 }}
  >
    {
      socialMediaData.map(company =>
        <LinkWrapper
          key={`social-media-${company.name}`}
          href={company.href}
        >
          <Icon
            icon={company.name}
            height='28px'
            width='28px'
          />
        </LinkWrapper>
      )
    }
  </List>

  ;

export default SocialMedia;
