import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';
import Icon from 'atoms/Icon';
import { Layout, Col } from 'atoms/Layout';
import UserAlert from 'atoms/UserAlert';
import ContactCard from 'organisms/cards/ContactCard';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import styles from './checkout.scss';

const CheckoutUserAlert = ({ userAlert, enabled, className }) => (
  <UserAlert
    enabled={enabled}
    onClick={userAlert.onClick}
    alertBottom='#sticky-bottom'
    innerZ={100}
    alertColor={userAlert.color}
    closeColor={userAlert.closeColor}
    className={styles[className]}
  >
    <Text
      size={9}
      font='a'
      color={userAlert.textColor}
      semibold
    >
      {userAlert.text}
    </Text>
  </UserAlert>
);

CheckoutUserAlert.propTypes = {
  userAlert: PropTypes.object,
  enabled: PropTypes.bool,
  className: PropTypes.string,
};

function CheckOut(props) {
  const {
    children,
    className,
    totalCost,
    footer,
    sidebar,
    userAlert,
    onMenuClick,
    contactProps,
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
          fullwidth
        >
          <Layout
            className={styles['head-layout']}
            smallCols={[ 12 ]}
            mediumCols={[ 3, 6, 3 ]}
            fullwidth
          >
            <Col className={styles['head-main']}>
              <div className={styles['logo-wrapper']}>
                <div
                  className={styles['logo-icon-wrapper']}
                >
                  <Icon icon='pgLogoBlack' className={styles['logo-pg']} />
                </div>
                <div className={styles['logo-chat']} onClick={onMenuClick}>
                  <Icon
                    className={styles['icon']}
                    icon='chat'
                  />
                  <div className={styles['logo-text']}>
                    Live Chat
                  </div>
                </div>
              </div>
            </Col>

            <Col
              className={classnames(styles['sticky-wrapper'], styles['head-body-wrapper'])}
            >
              <Sticky
                className={styles['sticky']}
                activeClass={styles['sticky']}
                enabled
                bottomBoundary='#sticky-bottom'
              >
                <Col
                  className={styles['head-body']}
                  fullwidth
                >
                  <Layout
                    className={styles['cost']}
                    mediumCols={[ 12 ]}
                    smallCols={[ 6 ]}
                  >
                    <Col className={styles['cost-title']}>
                      <Icon className={styles['icon']} icon='cart' />
                      {' '}
                      <div>Checkout</div>
                    </Col>
                    <Col fullwidth className={styles['cost-price']}>
                      { curr && <sup>{curr}</sup> }
                      { value }
                      { unit && <Text type={10} font='b' tag='span'>{unit}</Text> }
                    </Col>
                  </Layout>
                </Col>
                {
                  userAlert.condition
                    && (
                      <CheckoutUserAlert
                        enabled={false}
                        userAlert={userAlert}
                        className='user-alert-mobile'
                      />
                    )
                }
              </Sticky>
            </Col>

            <Col className={styles['head-foot']}>
              <Icon icon='norton' className={styles['secure-logo']} />
            </Col>
          </Layout>
          { userAlert.condition
            && (
              <CheckoutUserAlert
                enabled
                userAlert={userAlert}
                className='user-alert'
              />
            )}
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
              {
                contactProps
                && (
                  <div className={styles['contact-card']}>
                    <ContactCard {...contactProps} />
                  </div>
                )
              }
              <Spacer small />
              <Sticky
                enabled
                bottomBoundary='#sticky-bottom'
                top={userAlert.condition ? 72 : 24}
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
   * This prop will be passed to <ContactForm />
   */
  contactProps: PropTypes.shape({
    top: PropTypes.object,
    bottom: PropTypes.object,
  }),

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
