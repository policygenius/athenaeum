import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import UserAlert from 'atoms/UserAlert';
import Text from 'atoms/Text';
import styles from './checkout.scss';

function CheckOut(props) {
  const {
    children,
    className,
    totalCost,
    footer,
    sidebar,
    userAlert,
    onMenuClick,
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
                  <Icon
                    className={styles['icon']}
                    icon='hamburger'
                    onClick={onMenuClick}
                  />
                </Col>
              </Layout>
            </Col>

            <Sticky
              className={styles['sticky']}
              activeClass={styles['sticky']}
              bottomBoundary='#sticky-bottom'
              enabled
            >
              <Col
                className={styles['head-body']}
                fullwidth
              >
                <Layout
                  className={styles['cost']}
                  mediumCols={[ 12 ]}
                  smallCols={[ 7, 5 ]}
                >
                  <Col className={styles['cost-title']}>
                    <Icon className={styles['icon']} icon='cart' />
                    {' '}
                    <div>Checkout</div>
                  </Col>
                  <Col className={styles['cost-price']}>
                    { curr && <sup>{curr}</sup> }
                    { value }
                    { unit && <small>/{unit}</small> }
                  </Col>
                </Layout>
              </Col>
            </Sticky>

            <Col className={styles['head-foot']}>
              <Icon icon='nortonW' className={styles['secure-logo']} />
            </Col>
          </Layout>
        </Col>

        <Col
          className={styles['main']}
        >
          { userAlert.condition &&
            <UserAlert
              enabled
              onClick={userAlert.onClick}
              alertBottom='#sticky-bottom'
              innerZ={100}
              alertColor={userAlert.color}
              closeColor={userAlert.closeColor}
            >
              <Text
                type={6}
                color={userAlert.textColor}
                semibold
              >
                {userAlert.text}
              </Text>
            </UserAlert>
          }

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
  /**
   * object to set all properties for user alert
   */
  userAlert: PropTypes.shape({
    condition: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string,
    closeColor: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.string,
  }),
  /**
   * Click handler for mobile menu hambuger
   */
  onMenuClick: PropTypes.func,
};

export default CheckOut;
