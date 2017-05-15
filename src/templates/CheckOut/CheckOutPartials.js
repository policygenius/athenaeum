import React from 'react';

import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import styles from './checkout.scss';

export default {
  /* eslint-disable arrow-body-style */
  'head-main': () => {
    return (
      <Col
        className={styles['head-main']}
      >
        <Layout
          className={styles['logo-wrapper']}
          smallCols={[ 7, 5 ]}
          mediumCols={[ 12 ]}
        >
          <Icon icon='pgLogo' className={styles['logo-pg']} />
          <Col className={styles['logo-chat']}>
            <Icon className={styles.icon} icon='chat' />
            <span>Live Chat</span>
          </Col>
        </Layout>
      </Col>
    );
  },

  'head-body': (cost) => {
    const { curr, value, unit } = cost;

    return (
      <Col
        className={styles['head-body']}
      >
        <Layout
          className={styles['cost']}
          mediumCols={[ 12 ]}
          smallCols={[ 7, 5 ]}
        >
          <Col className={styles['cost-title']}>
            <Icon className={styles.icon} icon='cart' /> Checkout
          </Col>
          <Col className={styles['cost-price']}>
            { curr && <sup>{curr}</sup> }
            { value }
            { unit && <small>/{unit}</small> }
          </Col>
        </Layout>
      </Col>
    );
  },

  'head-foot': () => {
    return (
      <Col className={styles['head-foot']}>
        <Icon icon='nortonW' className={styles['secure-logo']} />
      </Col>
    );
  },

  'main-content': (children) => {
    if (!children) return null;

    return (
      <Col className={styles['main-content']} fullwidth>
        {children}
      </Col>
    );
  },

  'main-sidebar': (children) => {
    if (!children) return null;

    return (
      <Col className={styles['main-sidebar']}>
        {children}
      </Col>
    );
  },

  default: (children) => {
    if (!children) return null;

    return children;
  },

  /* eslint-enable arrow-body-style */
};
