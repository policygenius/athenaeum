import React from 'react';
import Icon from 'atoms/Icon';
import StepProgress from 'molecules/StepProgress';
import ContactCard from 'organisms/cards/ContactCard';
import TextComponent from 'atoms/TextComponent';

import styles from './navigator.module.scss';

export default {
  /* eslint-disable arrow-body-style */

  icon: () => {
    return (
      <Icon icon='pgLogo' className={styles.logo} />
    );
  },

  stepProgress: (data) => {
    return (
      <StepProgress
        className={styles['step-progress']}
        steps={data}
      />
    );
  },

  railText: (text) => {
    return (
      <TextComponent
        type={3}
        className={styles['logo-panel-text']}
        light
      >
        { text }
      </TextComponent>
    );
  },

  contactCard: (data) => {
    // eslint-disable-next-line
    const clickExample = () => alert('Chat clicked!')

    return (
      <ContactCard
        className={styles['contact-card']}
        phoneNumber='1 (800) 555-5309'
        chatText='Chat with an Expert'
        chatClick={clickExample}
        inverted={data && data.inverted}
      />
    );
  },

  main: (children) => {
    if (!children) return null;

    return children;
  },

  sidebar: (children) => {
    if (!children) return null;

    return <div className='sidebar'>{children}</div>;
  }

  /* eslint-enable arrow-body-style */
};
