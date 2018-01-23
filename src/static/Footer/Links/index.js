import React from 'react';
import { generate } from 'shortid';

import Icon from 'atoms/Icon';
import List from 'atoms/List';
import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './links.module.scss';
import { footerLinkItems } from '../data/links';

const Links = () =>
  (<div
    className={styles.links}
  >
    <Icon
      icon='madeInNy'
      height='35px'
      width='35px'
      className={styles.icon}
    />
    <List
      className={styles['link-list']}
      noBullets
      horizontal={{ spaceBetween: 18 }}
    >
      {
        footerLinkItems.map(link =>
          (<div
            key={`link-item-${generate()}`}
            className={styles['link-wrapper']}
          >
            <LinkWrapper
              hover='float'
              href={link.href}
              color='primary-3'
            >
              <Text
                type={10}
                font='b'
              >{ link.title }
              </Text>
            </LinkWrapper>
          </div>)
        )
      }
    </List>
  </div>)

  ;

export default Links;
