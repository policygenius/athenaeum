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
        fullwidth
      >
        <Layout
          className={styles['logo']}
          mediumCols={[ 12 ]}
          smallCols={[ 7, 5 ]}
          fullwidth
        >
          <Col className={styles['logo-wrapper']} fullwidth>
            <Icon icon='pgLogo' className={styles['logo-pg']} />
          </Col>
          <Col className={styles['logo-chat']} fullwidth>
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
        fullwidth
      >
        <Layout
          className={styles['cost']}
          mediumCols={[ 12 ]}
          smallCols={[ 7, 5 ]}
          fullwidth
        >
          <Col className={styles['cost-title']} fullwidth>
            <Icon className={styles.icon} icon='cart' /> Checkout
          </Col>
          <Col className={styles['cost-price']} fullwidth>
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
      <Col className={styles['head-foot']} fullwidth>
        <Icon icon='nortonLogoW' className={styles['secure-logo']} />
      </Col>
    );
  },

  'main-content': (children) => {
    if (!children) return null;

    return (
      <Col className={styles['main-content']}>
        {children}
      </Col>
    );
  },

  'main-sidebar': (children) => {
    if (!children) return null;

    return (
      <Col className={styles['main-sidebar']}>
        <div className='sidebar'>{children}</div>
      </Col>
    );
  }

  /* eslint-enable arrow-body-style */
};
