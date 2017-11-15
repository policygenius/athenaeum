import React from 'react';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';

import styles from './copyright.module.scss';

const Copyright = () =>
  <div
    className={styles.copyright}
  >
    <Text type={10} font='b'>
      Copyright PolicyGenius © 2014-2017
      <br />
      <br />
      22 West 19th St, Floor 8
      <br />
      New York, NY 10011
    </Text>
    <Spacer size={36} />
    <div className={styles['icon-list']}>
      <Icon
        icon='madeInNy'
        height='48px'
        width='48px'
        className={styles['made-in-ny']}
      />
      <Icon
        icon='norton'
        height='70px'
        width='75px'
      />
    </div>
  </div>

  ;

export default Copyright;
