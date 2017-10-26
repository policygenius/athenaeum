import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';

import { Layout, Col } from 'atoms/Layout';
import Icon from 'atoms/Icon';
import ContactCard from 'organisms/cards/ContactCard';
import StepProgress from 'molecules/StepProgress';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Button from 'atoms/Button';
import Hide from 'wrappers/Hide';
import UserAlert from 'atoms/UserAlert';

import styles from './navigator.module.scss';

function renderContactCard(contactProps, inverted) {
  const newProps = Object.assign({}, contactProps, { inverted });

  return <ContactCard {...newProps} />;
}

function renderButton(buttonProps) {
  return (
    <div className={styles['buttonWrapper']}>
      <Button {...buttonProps} variant='info' outline />
    </div>
  );
}

const NavigatorUserAlert = ({ userAlert, enabled, className }) =>
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
      size={6}
      color={userAlert.textColor}
      font='a'
    >
      {userAlert.text}
    </Text>
  </UserAlert>

;

function Navigator(props) {
  const {
    buttonProps,
    children,
    className,
    stepProgressData,
    leftRailText,
    contactProps,
    footer,
    sidebar,
    mobileHeader,
    onMenuClick,
    userAlert,
  } = props;


  return (
    <div className={classnames(styles['navigator'], className)}>
      <Layout
        className={styles['layout']}
        fullwidth
      >
        <Col className={styles['logo-panel']}>
          <Layout
            mediumCols={[ 8, 4 ]}
            largeCols={[ 12 ]}
            className={styles['logo-panel-layout']}
          >
            <Col
              className={styles['logo-panel-col']}
            >
              <div className={styles['logo-wrapper']}>
                <Sticky
                  enabled
                  top={36}
                  bottomBoundary={'#sticky-bottom'}
                  activeClass={styles['sticky']}
                >
                  <Icon icon='pgLogo' className={styles['logo']} />

                  <Hide hideOn='small medium'>
                    <Text className={styles['logo-panel-text']} type={6} font='b'>
                      { leftRailText }
                    </Text>
                  </Hide>
                </Sticky>

                <Icon
                  icon='hamburger'
                  className={styles['icon-hamburger']}
                  height='24px'
                  width='24px'
                  onClick={onMenuClick}
                />
              </div>

              <div className={styles['mobile-header-wrapper']}>
                <div className={styles['mobile-nav']}>
                  <StepProgress
                    className={styles['step-progress']}
                    steps={stepProgressData}
                  />

                  <Hide hideOn='large xLarge xxLarge'>
                    <Text className={styles['logo-panel-text']} type={3} light>
                      { leftRailText }
                    </Text>
                  </Hide>
                </div>

                <div className={styles['mobile-header']}>
                  <Sticky
                    enabled
                    bottomBoundary='#mobile-bottom'
                  >
                    { mobileHeader }
                  </Sticky>
                </div>
              </div>
            </Col>
            <div className={styles['contact-card']}>
              { renderContactCard(contactProps, true) }
            </div>
          </Layout>
        </Col>
        <Col className={styles['main']}>
          <div className={styles['user-alert']}>
            { userAlert.condition &&
              <Sticky
                enabled
                bottomBoundary={'#mobile-bottom'}
                activeClass={styles['sticky']}
              >
                <NavigatorUserAlert
                  enabled={false}
                  userAlert={userAlert}
                  className='user-alert'
                />
              </Sticky>
            }
          </div>
          <Layout
            className={styles['main-layout']}
            mediumCols={[ 7, 4 ]}
          >
            <Col className={styles['main-col']} fullwidth>
              <div id='sticky-top'>
                <Layout fullwidth>
                  <StepProgress
                    className={styles['step-progress']}
                    steps={stepProgressData}
                  />
                </Layout>
              </div>
              <div id='sticky-bottom'>
                { children }
              </div>
            </Col>

            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              <div className={styles['contact-card']}>
                { renderContactCard(contactProps) }
              </div>

              <Sticky
                enabled
                top='#sticky-top'
                bottomBoundary='#sticky-bottom'
              >
                <div className={styles['sidebar']}>{sidebar}</div>
                <Spacer small />
                { buttonProps && renderButton(buttonProps) }
              </Sticky>
            </Col>

          </Layout>
          <div className={styles['footer-container']} id='mobile-bottom'>
            <div className={styles['footer-wrapper']}>{footer}</div>
          </div>
        </Col>
      </Layout>
    </div>
  );
}

Navigator.propTypes = {
  /**
   * This prop will be add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Text to show up on left rail
   */
  leftRailText: PropTypes.string,
  stepProgressData: StepProgress.propTypes.steps,
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    variant: PropTypes.string
  }),
  contactProps: PropTypes.shape({
    top: PropTypes.object,
    bottom: PropTypes.object,
  }),
  mobileHeader: PropTypes.node,
  sidebar: PropTypes.node,
  footer: PropTypes.node,
  /**
   * Click handler for mobile menu hambuger
   */
  onMenuClick: PropTypes.func,
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
};

NavigatorUserAlert.propTypes = {
  userAlert: PropTypes.object,
  enabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Navigator;
