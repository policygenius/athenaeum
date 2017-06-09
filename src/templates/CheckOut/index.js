import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import styles from './checkout.scss';

function CheckOut(props) {
  const {
    children,
    className,
    totalCost,
    footer,
    sidebar,
  } = props;

  const { curr, value, unit } = totalCost;

  return (
    <div className={classnames(styles['checkout'], className)}>
      <Layout
        className={styles['checkout-layout']}
        fullwidth
      >
        <Col
          className={styles['head']}
        >
          <Layout
            className={styles['head-layout']}
            smallCols={[ 12 ]}
            mediumCols={[ 3, 6, 3 ]}
            fullwidth
          >
            <Col className={styles['head-main']}>
              <Layout
                className={styles['logo-wrapper']}
                smallCols={[ 7, 5 ]}
                mediumCols={[ 12 ]}
              >
                <Icon icon='pgLogo' className={styles['logo-pg']} />
                <Col className={styles['logo-chat']}>
                  <Icon className={styles['icon']} icon='chat' />
                  <span>Live Chat</span>
                </Col>
              </Layout>
            </Col>

            <Col
              className={styles['head-body']}
            >
              <Layout
                className={styles['cost']}
                mediumCols={[ 12 ]}
                smallCols={[ 7, 5 ]}
              >
                <Col className={styles['cost-title']}>
                  <Icon className={styles['icon']} icon='cart' /> Checkout
                </Col>
                <Col className={styles['cost-price']}>
                  { curr && <sup>{curr}</sup> }
                  { value }
                  { unit && <small>/{unit}</small> }
                </Col>
              </Layout>
            </Col>

            <Col className={styles['head-foot']}>
              <Icon icon='nortonW' className={styles['secure-logo']} />
            </Col>
          </Layout>
        </Col>

        <Col
          className={styles['main']}
        >
          <Layout
            className={styles['main-layout']}
            mediumCols={[ 7, 4 ]}
            fullwidth
          >
            <div id='sticky-bottom'>
              <Col className={styles['main-content']} fullwidth>
                { children }
              </Col>
            </div>
            <Col className={styles['main-sidebar']}>
              <Sticky
                enabled
                bottomBoundary='#sticky-bottom'
                top={24}
              >
                { sidebar }
              </Sticky>
            </Col>
          </Layout>
          <div className={styles['footer-container']}>
            <div className={styles['footer-wrapper']}>
              { footer }
            </div>
          </div>
        </Col>
      </Layout>
    </div>
  );
}

CheckOut.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  totalCost: PropTypes.shape({
    /**
     * currency unit (i.e $)
     */
    curr: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string
  }).isRequired,

  /**
   * Sidebar node
   */
  sidebar: PropTypes.node,

  /**
   * Footer node
   */
  footer: PropTypes.node,
};

export default CheckOut;
